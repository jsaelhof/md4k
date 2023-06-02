import { fireEvent, render, within } from "@testing-library/react";
import SortedGenre from "./sorted-genre";
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

describe("sorted-genre", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1",
          genre: 1,
        },
        {
          id: 1,
          title: "Movie 2",
          genre: 2,
        },
        {
          id: 2,
          title: "Movie 3",
          genre: 3,
        },
        {
          id: 3,
          title: "Movie 4",
          genre: 4,
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    const { getByTestId } = render(<SortedGenre {...props} />);

    expect(
      within(getByTestId("genre").childNodes[0]).getByText(/Comedy/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[0]).getByText("Movie 1")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[1]).getByText(/Drama/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[1]).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[2]).getByText(/Action/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[2]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[3]).getByText(/Sci-Fi/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[3]).getByText("Movie 4")
    ).toBeInTheDocument();
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    // eslint-disable-next-line no-import-assign
    useSortDirectionModule.useSortDirection = vi.fn().mockReturnValue("desc");

    const { getByTestId } = render(<SortedGenre {...props} />);

    expect(
      within(getByTestId("genre").childNodes[0]).getByText(/Sci-Fi/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[0]).getByText("Movie 4")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[1]).getByText(/Action/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[1]).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[2]).getByText(/Drama/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[2]).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("genre").childNodes[3]).getByText(/Comedy/)
    ).toBeInTheDocument();
    expect(
      within(getByTestId("genre").childNodes[3]).getByText("Movie 1")
    ).toBeInTheDocument();
  });

  it("should call the edit handler", ({ props }) => {
    const { getByText } = render(<SortedGenre {...props} />);
    fireEvent.click(
      within(getByText("Movie 1")).getByRole("button", { name: "Edit" })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the mark watched handler", ({ props }) => {
    const { getByText } = render(<SortedGenre {...props} />);
    fireEvent.click(
      within(getByText("Movie 1")).getByRole("button", { name: "Mark Watched" })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });

  it("should call the delete handler", ({ props }) => {
    const { getByText } = render(<SortedGenre {...props} />);
    fireEvent.click(
      within(getByText("Movie 1")).getByRole("button", { name: "Delete" })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1" })
    );
  });
});
