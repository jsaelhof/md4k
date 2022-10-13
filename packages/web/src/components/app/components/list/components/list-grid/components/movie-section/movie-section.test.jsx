import { fireEvent, render } from "@testing-library/react";
import MovieSection from "./movie-section";
import { vi } from "vitest";

vi.mock("../movie/movie", () => ({
  default: ({ onEditMovie, onMarkWatched, onDeleteMovie, movie }) => (
    <div aria-label="movieMock" data-title={movie.title}>
      {movie.title}
      <button onClick={() => onEditMovie(movie)}>Edit</button>
      <button onClick={() => onMarkWatched(movie)}>Mark Watched</button>
      <button onClick={() => onDeleteMovie(movie)}>Delete</button>
    </div>
  ),
}));

describe("movie-section", () => {
  let props;

  beforeEach(() => {
    props = {
      title: "Test Title",
      subtitle: "My Subtitle",
      list: [
        {
          id: 1,
          title: "Movie #1",
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render the section and assing handlers", () => {
    const { getByText, getByRole } = render(<MovieSection {...props} />);

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("My Subtitle")).toBeInTheDocument();
    expect(getByText("Movie #1")).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Edit" }));
    expect(props.onEditMovie).toHaveBeenCalled();

    fireEvent.click(getByRole("button", { name: "Mark Watched" }));
    expect(props.onMarkWatched).toHaveBeenCalled();

    fireEvent.click(getByRole("button", { name: "Delete" }));
    expect(props.onDeleteMovie).toHaveBeenCalled();
  });

  it("should not render the title and subtitle when the title is omitted", () => {
    const { getByText, queryByText } = render(
      <MovieSection {...props} title={undefined} />
    );

    expect(queryByText("Test Title")).not.toBeInTheDocument();
    expect(queryByText("My Subtitle")).not.toBeInTheDocument();
    expect(getByText("Movie #1")).toBeInTheDocument();
  });

  it("should not render the subtitle when omitted", () => {
    const { getByText, queryByText } = render(
      <MovieSection {...props} subtitle={undefined} />
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(queryByText("My Subtitle")).not.toBeInTheDocument();
    expect(getByText("Movie #1")).toBeInTheDocument();
  });
});
