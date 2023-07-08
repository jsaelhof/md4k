import { render, screen, within } from "@testing-library/react";
import TabPanelManual from "./tab-panel-manual";
import { vi } from "vitest";
import { sources } from "md4k-constants";
import { genres } from "md4k-constants";

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
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Title"), "Batman");
    expect(screen.getByDisplayValue("Batman")).toBeInTheDocument();

    // Poster
    expect(screen.getByLabelText("Poster")).toBeInTheDocument();
    await user.type(
      screen.getByLabelText("Poster"),
      "https://www.test.com/poster.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/poster.jpg")
    ).toBeInTheDocument();

    // Background
    expect(screen.getByLabelText("Background")).toBeInTheDocument();
    await user.type(
      screen.getByLabelText("Background"),
      "https://www.test.com/background.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/background.jpg")
    ).toBeInTheDocument();

    // Year
    expect(screen.getByLabelText("Year")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Year"), "2005");
    expect(screen.getByDisplayValue("2005")).toBeInTheDocument();

    // Runtime
    expect(screen.getByLabelText("Runtime")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Runtime"), "120");
    expect(screen.getByDisplayValue("120")).toBeInTheDocument();

    // IMDB ID
    expect(screen.getByLabelText("IMDBId")).toBeInTheDocument();
    await user.type(screen.getByLabelText("IMDBId"), "tt1234567");
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

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Runtime"), "120");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalledWith(
      expect.objectContaining({
        runtime: 7200,
      })
    );
  });

  it("should handle runtime input as hh:mm", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Runtime"), "2:00");

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

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Poster"), "something invalid");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it("should validate background", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Background"), "something invalid");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it("should validate year", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Year"), "100");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/4 digits/)).toBeInTheDocument();
  });

  it("should validate runtime", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");

    // Incorrect colon
    await user.type(screen.getByLabelText("Runtime"), ":0");
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too long)
    await user.clear(screen.getByLabelText("Runtime"));
    await user.type(screen.getByLabelText("Runtime"), "1000");
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too short)
    await user.clear(screen.getByLabelText("Runtime"));
    await user.type(screen.getByLabelText("Runtime"), "1");
    console.log(screen.getByLabelText("Runtime"));
    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();
  });

  it("should validate imdb id", async ({ props, user }) => {
    render(<TabPanelManual {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("IMDBId"), "12345");

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).not.toHaveBeenCalled();
    expect(screen.getByText(/tt0000000/)).toBeInTheDocument();
  });
});
