import { render, screen, within } from "@testing-library/react";
import { vi } from "vitest";
import { Source } from "md4k-constants";
import { Genre } from "md4k-constants";
import { ManualMovieForm, type ManualMovieFormProps } from "./manual-movie-form";
import Clear from "@mui/icons-material/Clear";

interface LocalTestContext {
  props: ManualMovieFormProps;
}

describe("manual-movie-form", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      actionLabel: "Save",
      ActionIcon: Clear,
      initialState: {},
      onChange: vi.fn(),
      onCancel: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the form and return the data on sumbit", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} />);

    // Title
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Title"), "Batman");
    expect(screen.getByDisplayValue("Batman")).toBeInTheDocument();

    // Poster
    expect(screen.getByLabelText("Poster URL")).toBeInTheDocument();
    await user.type(
      screen.getByLabelText("Poster URL"),
      "https://www.test.com/poster.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/poster.jpg")
    ).toBeInTheDocument();
    expect(screen.getByTestId("Preview")).toHaveStyle({
      "background-image": "url('https://www.test.com/poster.jpg')",
    });

    // Background
    expect(screen.getByLabelText("Background URL")).toBeInTheDocument();
    await user.type(
      screen.getByLabelText("Background URL"),
      "https://www.test.com/background.jpg"
    );
    expect(
      screen.getByDisplayValue("https://www.test.com/background.jpg")
    ).toBeInTheDocument();
    expect(screen.getByTestId("BackgroundPreview")).toHaveStyle({
      "background-image": "url('https://www.test.com/background.jpg')",
    });

    // Year
    expect(screen.getByLabelText("Year")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Year"), "2005");
    expect(screen.getByDisplayValue("2005")).toBeInTheDocument();

    // Runtime
    expect(screen.getByLabelText("Runtime")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Runtime"), "120");
    expect(screen.getByDisplayValue("120")).toBeInTheDocument();

    // IMDB ID
    expect(screen.getByLabelText("IMDB ID")).toBeInTheDocument();
    await user.type(screen.getByLabelText("IMDB ID"), "tt1234567");
    expect(screen.getByDisplayValue("tt1234567")).toBeInTheDocument();

    // Genre
    expect(screen.getByTestId("genre")).toBeInTheDocument();
    await user.click(within(screen.getByTestId("genre")).getByRole("combobox"));
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Horror" }));
    expect(
      await within(screen.getByTestId("genre")).findByText("Horror")
    ).toBeInTheDocument();

    // Source
    expect(screen.getByTestId("source")).toBeInTheDocument();
    await user.click(
      within(screen.getByTestId("source")).getByRole("combobox")
    );
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Netflix" }));
    expect(
      await within(screen.getByTestId("source")).findByText("Netflix")
    ).toBeInTheDocument();

    // Save
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).toHaveBeenCalledWith({
      background: "https://www.test.com/background.jpg",
      genre: Genre.HORROR,
      imdbID: "tt1234567",
      poster: "https://www.test.com/poster.jpg",
      runtime: 7200,
      source: Source.NETFLIX,
      title: "Batman",
      year: "2005",
    });
  });

  it<LocalTestContext>("should handle runtime input as minutes", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Runtime"), "120");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        runtime: 7200,
      })
    );
  });

  it<LocalTestContext>("should handle runtime input as hh:mm", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Runtime"), "2:00");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        runtime: 7200,
      })
    );
  });

  it<LocalTestContext>("should validate title", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText("Title is required")).toBeInTheDocument();
  });

  it<LocalTestContext>("should validate poster", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Poster URL"), "something invalid");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should validate background", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(
      screen.getByLabelText("Background URL"),
      "something invalid"
    );

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/must start with/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should validate year", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("Year"), "100");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/4 digits/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should validate runtime", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");

    // Incorrect colon
    await user.type(screen.getByLabelText("Runtime"), ":0");
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too long)
    await user.clear(screen.getByLabelText("Runtime"));
    await user.type(screen.getByLabelText("Runtime"), "1000");
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();

    // Incorrect digits (too short)
    await user.clear(screen.getByLabelText("Runtime"));
    await user.type(screen.getByLabelText("Runtime"), "1");
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/Runtime must be/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should validate imdb id", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("IMDB ID"), "12345");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).not.toHaveBeenCalled();
    expect(screen.getByText(/tt0000000/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should allow longer imdb ids", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} />);

    await user.type(screen.getByLabelText("Title"), "Test");
    await user.type(screen.getByLabelText("IMDB ID"), "tt123456789");

    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(props.onChange).toHaveBeenCalled();
    expect(screen.queryByText(/tt0000000/)).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should call onCancel", async ({ props, user }) => {
    render(<ManualMovieForm {...props} />);
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it<LocalTestContext>("should render an initial state when provided", ({
    props,
  }) => {
    render(
      <ManualMovieForm
        {...props}
        initialState={{
          title: "Test Movie",
          poster: "https://test.com/poster.jpg",
          background: "https://test.com/background.jpg",
          year: "1994",
          runtime: 5700,
          genre: 1,
          source: 1,
          imdbID: "tt1234567",
        }}
      />
    );

    expect(screen.getByDisplayValue("Test Movie")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("https://test.com/poster.jpg")
    ).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("https://test.com/background.jpg")
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("1994")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1:35")).toBeInTheDocument();
    expect(screen.getByDisplayValue("tt1234567")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
    expect(screen.getByText("Netflix")).toBeInTheDocument();
  });

  it<LocalTestContext>("should return a diff from a populated initial state", async ({
    props,
    user,
  }) => {
    render(
      <ManualMovieForm
        {...props}
        initialState={{
          title: "Test Movie",
          poster: "https://test.com/poster.jpg",
          background: "https://test.com/background.jpg",
          year: "1994",
          runtime: 5700,
          genre: 1,
          source: 1,
          imdbID: "tt1234567",
        }}
      />
    );

    const saveBtn = screen.getByRole("button", { name: "Save" });

    // No changes from initial state yet
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith({});

    // Change title
    await user.type(screen.getByLabelText("Title"), " Edit");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ title: "Test Movie Edit" })
    );

    // Can't remove title...clearing will trigger form validation since title is not nullable.

    // Change poster
    await user.type(screen.getByLabelText("Poster URL"), "/edit");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ poster: "https://test.com/poster.jpg/edit" })
    );

    // Clear poster
    await user.clear(screen.getByLabelText("Poster URL"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ poster: null })
    );

    // Change background
    await user.type(screen.getByLabelText("Background URL"), "/edit");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        background: "https://test.com/background.jpg/edit",
      })
    );

    // Clear background
    await user.clear(screen.getByLabelText("Background URL"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ background: null })
    );

    // Change year
    await user.type(screen.getByLabelText("Year"), "{Backspace}6");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ year: "1996" })
    );

    // Clear year
    await user.clear(screen.getByLabelText("Year"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ year: null })
    );

    // Change runtime
    await user.type(screen.getByLabelText("Runtime"), "{Backspace}0");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ runtime: 5400 })
    );

    // Clear runtime
    await user.clear(screen.getByLabelText("Runtime"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ runtime: null })
    );

    // Change imdbID
    await user.type(screen.getByLabelText("IMDB ID"), "{Backspace}9");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ imdbID: "tt1234569" })
    );

    // Clear imdbID
    await user.clear(screen.getByLabelText("IMDB ID"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ imdbID: null })
    );

    // Change source
    await user.click(
      within(screen.getByTestId("source")).getByRole("combobox")
    );
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: /Disney/ }));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ source: 6 })
    );

    // Change genre
    await user.click(within(screen.getByTestId("genre")).getByRole("combobox"));
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Horror" }));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ genre: 10 })
    );
  });

  it<LocalTestContext>("should return a diff from a default initial state", async ({
    props,
    user,
  }) => {
    render(<ManualMovieForm {...props} initialState={undefined} />);

    const saveBtn = screen.getByRole("button", { name: "Save" });

    // Have to add a title to validate
    await user.type(screen.getByLabelText("Title"), "Test Movie");

    // No changes from initial state yet
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith({
      title: "Test Movie",
      genre: 0,
      source: 0,
    });

    // Change title
    await user.type(screen.getByLabelText("Title"), " Edit");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ title: "Test Movie Edit" })
    );

    // Can't remove title...clearing will trigger form validation since title is not nullable.

    // Change poster
    await user.type(
      screen.getByLabelText("Poster URL"),
      "https://test.com/poster.jpg"
    );
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ poster: "https://test.com/poster.jpg" })
    );

    // Clear poster
    await user.clear(screen.getByLabelText("Poster URL"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ poster: null })
    );

    // Change background
    await user.type(
      screen.getByLabelText("Background URL"),
      "https://test.com/background.jpg"
    );
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ background: "https://test.com/background.jpg" })
    );

    // Clear background
    await user.clear(screen.getByLabelText("Background URL"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ background: null })
    );

    // Change year
    await user.type(screen.getByLabelText("Year"), "1996");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ year: "1996" })
    );

    // Clear year
    await user.clear(screen.getByLabelText("Year"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ year: null })
    );

    // Change runtime
    await user.type(screen.getByLabelText("Runtime"), "1:30");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ runtime: 5400 })
    );

    // Clear runtime
    await user.clear(screen.getByLabelText("Runtime"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ runtime: null })
    );

    // Change imdbID
    await user.type(screen.getByLabelText("IMDB ID"), "tt9876543");
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ imdbID: "tt9876543" })
    );

    // Clear imdbID
    await user.clear(screen.getByLabelText("IMDB ID"));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ imdbID: null })
    );

    // Change source
    await user.click(
      within(screen.getByTestId("source")).getByRole("combobox")
    );
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: /Disney/ }));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ source: 6 })
    );

    // Change genre
    await user.click(within(screen.getByTestId("genre")).getByRole("combobox"));
    await user.click(screen.getByRole("listbox"));
    await user.click(screen.getByRole("option", { name: "Horror" }));
    await user.click(saveBtn);
    expect(props.onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ genre: 10 })
    );
  });
});
