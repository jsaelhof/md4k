import { fireEvent, screen } from "@testing-library/react";
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
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
        },
      ],
      onRemoveMovie: vi.fn(),
    };
  });

  it("should render the addedOn list", async ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });
    expect(screen.getByTestId("addedOn")).toBeInTheDocument();
  });

  it("should render the title list", async ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/title/asc",
    });
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should render the runtime list", async ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/runtime/asc",
    });
    expect(screen.getByTestId("runtime")).toBeInTheDocument();
  });

  it("should render the genre list", async ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/genre/asc",
    });
    expect(screen.getByTestId("genre")).toBeInTheDocument();
  });

  it("should render the empty list when there are no movies", async ({
    props,
  }) => {
    renderWithProviders(<ListGrid {...props} movies={[]} />, {
      route: "/addedOn/asc",
    });
    expect(
      screen.getByRole("button", { name: "Add a Movie" })
    ).toBeInTheDocument();
  });

  it("should render null when movies is undefined", async ({ props }) => {
    renderWithProviders(<ListGrid {...props} movies={undefined} />, {
      route: "/addedOn/asc",
    });
    expect(screen.queryByText(/Movie/)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Add a Movie" })
    ).not.toBeInTheDocument();
  });

  it("should render the delete confirmation and call onRemoveMovie when deleting a movie", async ({
    props,
  }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });

    fireEvent.click(screen.getByText("Movie 1"));
    expect(screen.getByText("'Movie 1' will be removed")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onRemoveMovie).toHaveBeenCalledWith(props.movies[0]);
    expect(
      screen.queryByText("'Movie 1' will be removed")
    ).not.toBeInTheDocument();
  });

  it("should render the delete confirmation and cancel correctly when deleting a movie", async ({
    props,
  }) => {
    renderWithProviders(<ListGrid {...props} />, { route: "/addedOn/asc" });

    fireEvent.click(screen.getByText("Movie 1"));
    expect(screen.getByText("'Movie 1' will be removed")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(props.onRemoveMovie).not.toHaveBeenCalled();
    expect(
      screen.queryByText("'Movie 1' will be removed")
    ).not.toBeInTheDocument();
  });
});
