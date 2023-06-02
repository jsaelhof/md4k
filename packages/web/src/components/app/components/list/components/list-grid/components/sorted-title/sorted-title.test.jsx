import { fireEvent, render, within, screen } from "@testing-library/react";
import SortedTitle from "./sorted-title";
import { vi } from "vitest";
import * as useSortDirectionModule from "../../../../../../../../hooks/use-sort-direction";

vi.mock("../movie/movie", () => ({
  default: ({ onEditMovie, onMarkWatched, onDeleteMovie, movie }) => (
    <div aria-label="movieMock">
      {movie.title}
      <button onClick={() => onEditMovie(movie)}>Edit</button>
      <button onClick={() => onMarkWatched(movie)}>Mark Watched</button>
      <button onClick={() => onDeleteMovie(movie)}>Delete</button>
    </div>
  ),
}));

vi.mock("../../../../../../../../hooks/use-sort-direction", () => ({
  useSortDirection: vi.fn().mockReturnValue("asc"),
}));

describe("sorted-title", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
        },
        {
          id: 1,
          title: "Movie 2",
        },
        {
          id: 2,
          title: "Movie 3",
        },
        {
          id: 3,
          title: "Movie 4",
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    render(<SortedTitle {...props} />);

    const movieNodes = screen.queryAllByText(/Movie/);

    expect(movieNodes).toHaveLength(4);
    expect(within(movieNodes[0]).getByText("Movie 1")).toBeInTheDocument();
    expect(within(movieNodes[1]).getByText("Movie 2")).toBeInTheDocument();
    expect(within(movieNodes[2]).getByText("Movie 3")).toBeInTheDocument();
    expect(within(movieNodes[3]).getByText("Movie 4")).toBeInTheDocument();
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    // eslint-disable-next-line no-import-assign
    useSortDirectionModule.useSortDirection = vi.fn().mockReturnValue("desc");

    render(<SortedTitle {...props} />);

    const movieNodes = screen.queryAllByText(/Movie/);

    expect(movieNodes).toHaveLength(4);
    expect(within(movieNodes[0]).getByText("Movie 4")).toBeInTheDocument();
    expect(within(movieNodes[1]).getByText("Movie 3")).toBeInTheDocument();
    expect(within(movieNodes[2]).getByText("Movie 2")).toBeInTheDocument();
    expect(within(movieNodes[3]).getByText("Movie 1")).toBeInTheDocument();
  });

  it("should call the edit handler", ({ props }) => {
    render(<SortedTitle {...props} />);
    fireEvent.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Edit",
      })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the mark watched handler", ({ props }) => {
    render(<SortedTitle {...props} />);
    fireEvent.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the delete handler", ({ props }) => {
    render(<SortedTitle {...props} />);
    fireEvent.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Delete",
      })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });
});
