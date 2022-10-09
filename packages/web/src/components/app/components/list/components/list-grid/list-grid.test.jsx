import { fireEvent } from "@testing-library/react";
import ListGrid from "./list-grid";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

vi.mock("./components/movie/movie", () => ({
  default: ({ onDeleteMovie, movie }) => (
    <div
      aria-label="movieMock"
      data-title={movie.title}
      onClick={() => onDeleteMovie(movie)}
    >
      {movie.title}
    </div>
  ),
}));

// NOTE: Routes passed to render-with-providers within this file are relative to the sub-routes since I am only rendering the list-grid itself.
describe("list-grid", () => {
  let props;

  beforeEach(() => {
    props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
        },
      ],
      onRemoveMovie: vi.fn(),
    };
  });

  it("should render the addedOn list", async () => {
    const { getByTestId } = await renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });
    expect(getByTestId("addedOn")).toBeInTheDocument();
  });

  it("should render the title list", async () => {
    const { getByTestId } = await renderWithProviders(<ListGrid {...props} />, {
      route: "/title/asc",
    });
    expect(getByTestId("title")).toBeInTheDocument();
  });

  it("should render the runtime list", async () => {
    const { getByTestId } = await renderWithProviders(<ListGrid {...props} />, {
      route: "/runtime/asc",
    });
    expect(getByTestId("runtime")).toBeInTheDocument();
  });

  it("should render the genre list", async () => {
    const { getByTestId } = await renderWithProviders(<ListGrid {...props} />, {
      route: "/genre/asc",
    });
    expect(getByTestId("genre")).toBeInTheDocument();
  });

  it("should render the empty list when there are no movies", async () => {
    const { getByRole } = await renderWithProviders(
      <ListGrid {...props} movies={[]} />,
      { route: "/addedOn/asc" }
    );
    expect(getByRole("button", { name: "Add a Movie" })).toBeInTheDocument();
  });

  it("should render null when movies is undefined", async () => {
    const { queryByRole, queryByText } = await renderWithProviders(
      <ListGrid {...props} movies={undefined} />,
      { route: "/addedOn/asc" }
    );
    expect(queryByText(/Movie/)).not.toBeInTheDocument();
    expect(
      queryByRole("button", { name: "Add a Movie" })
    ).not.toBeInTheDocument();
  });

  it("should render the delete confirmation and call onRemoveMovie when deleting a movie", async () => {
    const { debug, getByText, getByRole, queryByText } =
      await renderWithProviders(<ListGrid {...props} />, {
        route: "/addedOn/asc",
      });

    debug();

    fireEvent.click(getByText("Movie 1"));
    expect(getByText("'Movie 1' will be removed")).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Delete" }));
    expect(props.onRemoveMovie).toHaveBeenCalledWith(props.movies[0]);
    expect(queryByText("'Movie 1' will be removed")).not.toBeInTheDocument();
  });

  it("should render the delete confirmation and cancel correctly when deleting a movie", async () => {
    const { getByText, getByRole, queryByText } = await renderWithProviders(
      <ListGrid {...props} />,
      { route: "/addedOn/asc" }
    );

    fireEvent.click(getByText("Movie 1"));
    expect(getByText("'Movie 1' will be removed")).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Cancel" }));
    expect(props.onRemoveMovie).not.toHaveBeenCalled();
    expect(queryByText("'Movie 1' will be removed")).not.toBeInTheDocument();
  });
});
