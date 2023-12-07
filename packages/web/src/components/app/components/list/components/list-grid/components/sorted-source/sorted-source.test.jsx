import { render, within, screen } from "@testing-library/react";
import SortedSource from "./sorted-source";
import { vi } from "vitest";

const { MOCK_USE_SORT_DIRECTION } = vi.hoisted(() => ({
  MOCK_USE_SORT_DIRECTION: vi.fn().mockReturnValue("asc"),
}));

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
  useSortDirection: MOCK_USE_SORT_DIRECTION,
}));

describe("sorted-source", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
          source: 0,
        },
        {
          id: 1,
          title: "Movie 2",
          source: 1,
        },
        {
          id: 2,
          title: "Movie 3",
          source: 2,
        },
        {
          id: 3,
          title: "Movie 4",
          source: 3,
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    render(<SortedSource {...props} />);

    expect(
      within(screen.getByTestId("source").childNodes[0]).getByAltText("Netflix")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[0]).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[1]).getByAltText(
        "Prime Video"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[1]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[2]).getByAltText(
        "AppleTV+"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[2]).getByText("Movie 4")
    ).toBeInTheDocument();

    // The "No Source" section should be moved to the end
    expect(
      within(screen.getByTestId("source").childNodes[3]).getByAltText("None")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[3]).getByText("Movie 1")
    ).toBeInTheDocument();
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedSource {...props} />);

    expect(
      within(screen.getByTestId("source").childNodes[0]).getByAltText("None")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[0]).getByText("Movie 1")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[1]).getByAltText(
        "AppleTV+"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[1]).getByText("Movie 4")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[2]).getByAltText(
        "Prime Video"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[2]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[3]).getByAltText("Netflix")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[3]).getByText("Movie 2")
    ).toBeInTheDocument();
  });

  it("should call the edit handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Edit",
      })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the mark watched handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the delete handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1")).getByRole("button", {
        name: "Delete",
      })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });
});
