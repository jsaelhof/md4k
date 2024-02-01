import { screen } from "@testing-library/react";
import ListGrid from "./list-grid";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";
import { MovieProps } from "./components/movie/movie";
import { ListGridProps } from "./types";

vi.mock("./components/movie/movie", () => ({
  default: ({ onRemoveMovie, movie }: MovieProps) => (
    <div
      aria-label="movieMock"
      data-title={movie.title}
      onClick={() => onRemoveMovie(movie)}
    >
      {movie.title}
    </div>
  ),
}));

interface LocalTestContext {
  props: ListGridProps;
}

// NOTE: Routes passed to render-with-providers within this file are relative to the sub-routes since I am only rendering the list-grid itself.
describe("list-grid", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movies: [
        {
          id: "0",
          title: "Movie 1",
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onRemoveMovie: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the addedOn list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });
    expect(screen.getByTestId("addedOn")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the title list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/title/asc",
    });
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the runtime list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/runtime/asc",
    });
    expect(screen.getByTestId("runtime")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the source list", ({ props }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/source/asc",
    });
    expect(screen.getByTestId("source")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the empty list when there are no movies", ({
    props,
  }) => {
    renderWithProviders(<ListGrid {...props} movies={[]} />, {
      route: "/addedOn/asc",
    });
    expect(
      screen.getByRole("button", { name: "Add a Movie" })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should render null when movies is undefined", ({
    props,
  }) => {
    renderWithProviders(<ListGrid {...props} movies={undefined} />, {
      route: "/addedOn/asc",
    });
    expect(screen.queryByText(/Movie/)).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Add a Movie" })
    ).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should render the delete confirmation and call onRemoveMovie when deleting a movie", async ({
    props,
    user,
  }) => {
    renderWithProviders(<ListGrid {...props} />, {
      route: "/addedOn/asc",
    });

    await user.click(screen.getByText("Movie 1"));
    expect(screen.getByText("'Movie 1' will be removed")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onRemoveMovie).toHaveBeenCalledWith(props.movies?.[0]);
    expect(
      screen.queryByText("'Movie 1' will be removed")
    ).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should render the delete confirmation and cancel correctly when deleting a movie", async ({
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
