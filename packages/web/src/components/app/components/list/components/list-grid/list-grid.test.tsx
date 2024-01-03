import { screen } from "@testing-library/react";
import ListGrid from "./list-grid";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";

vi.mock("./components/movie/movie", () => ({
  default: ({ onRemoveMovie, movie }) => (
    <div
      aria-label="movieMock"
      data-title={movie.title}
      onClick={() => onRemoveMovie(movie)}
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

  it("should render the addedOn list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });
    expect(screen.getByTestId("addedOn")).toBeInTheDocument();
  });

  it("should render the title list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/title/asc",
    });
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should render the runtime list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/runtime/asc",
    });
    expect(screen.getByTestId("runtime")).toBeInTheDocument();
  });

  it("should render the source list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/source/asc",
    });
    expect(screen.getByTestId("source")).toBeInTheDocument();
  });

  it("should render the empty list when there are no movies", ({ props }) => {
    renderWithProviders(<ListGrid {...props} movies={[]} />, {
      route: "/addedOn/asc",
    });
    expect(
      screen.getByRole("button", { name: "Add a Movie" })
    ).toBeInTheDocument();
  });

  it("should render null when movies is undefined", ({ props }) => {
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
    user,
  }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });

    await user.click(screen.getByText("Movie 1"));
    expect(screen.getByText("'Movie 1' will be removed")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onRemoveMovie).toHaveBeenCalledWith(props.movies[0]);
    expect(
      screen.queryByText("'Movie 1' will be removed")
    ).not.toBeInTheDocument();
  });

  it("should render the delete confirmation and cancel correctly when deleting a movie", async ({
    props,
    user,
  }) => {
    renderWithProviders(<ListGrid {...props} />, { route: "/addedOn/asc" });

    await user.click(screen.getByText("Movie 1"));
    expect(screen.getByText("'Movie 1' will be removed")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(props.onRemoveMovie).not.toHaveBeenCalled();
    expect(
      screen.queryByText("'Movie 1' will be removed")
    ).not.toBeInTheDocument();
  });
});