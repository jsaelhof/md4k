import { render, within, screen } from "@testing-library/react";
import SortedTitle from "./sorted-title";
import { vi } from "vitest";
import { MovieProps } from "../movie/movie";
import { ListGridProps } from "../../types";

const { MOCK_USE_SORT_DIRECTION } = vi.hoisted(() => ({
  MOCK_USE_SORT_DIRECTION: vi.fn().mockReturnValue("asc"),
}));

vi.mock("../movie/movie", () => ({
  default: ({
    onEditMovie,
    onMarkWatched,
    onRemoveMovie,
    movie,
  }: MovieProps) => (
    <div aria-label="movieMock">
      {movie.title}
      <button onClick={() => onEditMovie(movie)}>Edit</button>
      <button onClick={() => onMarkWatched(movie)}>Mark Watched</button>
      <button onClick={() => onRemoveMovie(movie)}>Delete</button>
    </div>
  ),
}));

vi.mock("../../../../../../../../hooks/use-sort-direction", () => ({
  useSortDirection: MOCK_USE_SORT_DIRECTION,
}));

interface LocalTestContext {
  props: ListGridProps;
}

describe("sorted-title", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movies: [
        {
          id: "0",
          title: "Movie 1",
        },
        {
          id: "1",
          title: "Movie 2",
        },
        {
          id: "2",
          title: "Movie 3",
        },
        {
          id: "3",
          title: "Movie 4",
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onRemoveMovie: vi.fn(),
    };
  });

  it<LocalTestContext>("should render correctly when the order is ASC", ({
    props,
  }) => {
    render(<SortedTitle {...props} />);

    const movieNodes = screen.queryAllByText(/Movie/);

    expect(movieNodes).toHaveLength(4);
    expect(within(movieNodes[0]).getByText("Movie 1")).toBeInTheDocument();
    expect(within(movieNodes[1]).getByText("Movie 2")).toBeInTheDocument();
    expect(within(movieNodes[2]).getByText("Movie 3")).toBeInTheDocument();
    expect(within(movieNodes[3]).getByText("Movie 4")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render correctly when the order is DESC", ({
    props,
  }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedTitle {...props} />);

    const movieNodes = screen.queryAllByText(/Movie/);

    expect(movieNodes).toHaveLength(4);
    expect(within(movieNodes[0]).getByText("Movie 4")).toBeInTheDocument();
    expect(within(movieNodes[1]).getByText("Movie 3")).toBeInTheDocument();
    expect(within(movieNodes[2]).getByText("Movie 2")).toBeInTheDocument();
    expect(within(movieNodes[3]).getByText("Movie 1")).toBeInTheDocument();
  });

  it<LocalTestContext>("should call the edit handler", async ({
    props,
    user,
  }) => {
    render(<SortedTitle {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Edit",
      })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it<LocalTestContext>("should call the mark watched handler", async ({
    props,
    user,
  }) => {
    render(<SortedTitle {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it<LocalTestContext>("should call the delete handler", async ({
    props,
    user,
  }) => {
    render(<SortedTitle {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Delete",
      })
    );
    expect(props.onRemoveMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });
});
