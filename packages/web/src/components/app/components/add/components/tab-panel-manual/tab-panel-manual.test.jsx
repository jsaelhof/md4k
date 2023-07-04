import { render, screen, within } from "@testing-library/react";
import TabPanelManual from "./tab-panel-manual";
import { vi } from "vitest";
import { sources } from "md4k-constants";
import { genres } from "md4k-constants";

// NOTE: I had to use data-testid with querySelector here because I cannot figure out how to get MUI
// to allow a label that propogates down to the input without creating its own field label and overwriting the placeholder.
describe("tab-panel-manual", () => {
  beforeEach((context) => {
    context.props = {
      tabId: 0,
      hidden: false,
      onAddMovie: vi.fn(),
    };
  });
  it("should render the form and return the data on sumbit", async ({
    props,
    user,
  }) => {
    render(<TabPanelManual {...props} />);

    // Title
    expect(screen.getByTestId("Title")).toBeInTheDocument();
    await user.type(
      screen.getByTestId("Title").querySelector("input"),
      "Batman"
    );
    expect(screen.getByDisplayValue("Batman")).toBeInTheDocument();

    // Poster
    expect(screen.getByTestId("Poster")).toBeInTheDocument();
    await user.type(
      screen.getByTestId("Poster").querySelector("input"),
      "https://www.test.com/poster.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/poster.jpg")
    ).toBeInTheDocument();

    // Background
    expect(screen.getByTestId("Background")).toBeInTheDocument();
    await user.type(
      screen.getByTestId("Background").querySelector("input"),
      "https://www.test.com/background.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/background.jpg")
    ).toBeInTheDocument();

    // Year
    expect(screen.getByTestId("Year")).toBeInTheDocument();
    await user.type(screen.getByTestId("Year").querySelector("input"), "2005");
    expect(screen.getByDisplayValue("2005")).toBeInTheDocument();

    // Runtime
    expect(screen.getByTestId("Runtime")).toBeInTheDocument();
    await user.type(
      screen.getByTestId("Runtime").querySelector("input"),
      "120"
    );
    expect(screen.getByDisplayValue("120")).toBeInTheDocument();

    // IMDB ID
    expect(screen.getByTestId("IMDBId")).toBeInTheDocument();
    await user.type(
      screen.getByTestId("IMDBId").querySelector("input"),
      "tt1234567"
    );
    expect(screen.getByDisplayValue("tt1234567")).toBeInTheDocument();

    // Genre
    expect(screen.getByTestId("Genre")).toBeInTheDocument();
    await user.click(
      within(screen.getByTestId("Genre")).getByRole("button", { hidden: true })
    );
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Horror" }));
    expect(
      await within(screen.getByTestId("Genre")).findByText("Horror")
    ).toBeInTheDocument();

    // Source
    expect(screen.getByTestId("Source")).toBeInTheDocument();
    await user.click(
      within(screen.getByTestId("Source")).getByRole("button", { hidden: true })
    );
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Netflix" }));
    expect(
      await within(screen.getByTestId("Source")).findByText("Netflix")
    ).toBeInTheDocument();

    // Save
    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalledWith({
      background: "https://www.test.com/background.jpg",
      genre: genres.HORROR,
      imdbID: "tt1234567",
      poster: "https://www.test.com/poster.jpg",
      runtime: 7200,
      source: sources.NETFLIX,
      title: "Batman",
      year: "2005",
    });
  });

  it("should handle runtime input as minutes", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(
      screen.getByTestId("Runtime").querySelector("input"),
      "120"
    );

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalledWith(
      expect.objectContaining({
        runtime: 7200,
      })
    );
  });

  it("should handle runtime input as hh:mm", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(
      screen.getByTestId("Runtime").querySelector("input"),
      "2:00"
    );

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalledWith(
      expect.objectContaining({
        runtime: 7200,
      })
    );
  });

  it("should validate title", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText("Title is required")).toBeInTheDocument();
  });

  it("should validate poster", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(
      screen.getByTestId("Poster").querySelector("input"),
      "something invalid"
    );

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it("should validate background", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(
      screen.getByTestId("Background").querySelector("input"),
      "something invalid"
    );

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it("should validate year", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(screen.getByTestId("Year").querySelector("input"), "100");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/4 digits/)).toBeInTheDocument();
  });

  it("should validate runtime", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");

    // Incorrect colon
    await user.type(screen.getByTestId("Runtime").querySelector("input"), ":0");
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too long)
    await user.clear(screen.getByTestId("Runtime").querySelector("input"));
    await user.type(
      screen.getByTestId("Runtime").querySelector("input"),
      "1000"
    );
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too short)
    await user.clear(screen.getByTestId("Runtime").querySelector("input"));
    await user.type(screen.getByTestId("Runtime").querySelector("input"), "1");
    console.log(screen.getByTestId("Runtime").querySelector("input"));
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();
  });

  it("should validate imdb id", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByTestId("Title").querySelector("input"), "Test");
    await user.type(
      screen.getByTestId("IMDBId").querySelector("input"),
      "12345"
    );

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/tt0000000/)).toBeInTheDocument();
  });
});
