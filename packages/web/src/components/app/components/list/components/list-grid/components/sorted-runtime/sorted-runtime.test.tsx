import { render, within, screen } from "@testing-library/react";
import SortedRuntime from "./sorted-runtime";
import { vi } from "vitest";

const { MOCK_USE_SORT_DIRECTION } = vi.hoisted(() => ({
  MOCK_USE_SORT_DIRECTION: vi.fn().mockReturnValue("asc"),
}));

vi.mock("../movie/movie", () => ({
  default: ({ onEditMovie, onMarkWatched, onRemoveMovie, movie }) => (
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

describe("sorted-runtime", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
          runtime: 5400,
        },
        {
          id: 1,
          title: "Movie 2",
          runtime: 6600,
        },
        {
          id: 2,
          title: "Movie 3",
          runtime: 9000,
        },
        {
          id: 3,
          title: "Movie 4",
          // Mising Runtime
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onRemoveMovie: vi.fn(),
    };
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    render(<SortedRuntime {...props} />);

    expect(
      within(screen.getByTestId("runtime").childNodes[0]).getByText(/Short/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[0]).getByText("Movie 1")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[1]).getByText(/Regular/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[1]).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[2]).getByText(/Long/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[2]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[3]).getByText(
        /No Runtime/
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[3]).getByText("Movie 4")
    ).toBeInTheDocument();
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedRuntime {...props} />);

    expect(
      within(screen.getByTestId("runtime").childNodes[0]).getByText(/Long/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[0]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[1]).getByText(/Regular/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[1]).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[2]).getByText(/Short/)
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[2]).getByText("Movie 1")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("runtime").childNodes[3]).getByText(
        /No Runtime/
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("runtime").childNodes[3]).getByText("Movie 4")
    ).toBeInTheDocument();
  });

  it("should call the edit handler", async ({ props, user }) => {
    render(<SortedRuntime {...props} />);
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
    render(<SortedRuntime {...props} />);
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
    render(<SortedRuntime {...props} />);
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
