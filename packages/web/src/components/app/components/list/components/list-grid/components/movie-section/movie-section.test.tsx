import { render, screen } from "@testing-library/react";
import MovieSection, { type MovieSectionProps } from "./movie-section";
import { vi } from "vitest";
import { type MovieProps } from "../movie/movie";

vi.mock("../movie/movie", () => ({
  default: ({
    onEditMovie,
    onMarkWatched,
    onRemoveMovie,
    movie,
  }: MovieProps) => (
    <div aria-label="movieMock" data-title={movie.title}>
      {movie.title}
      <button onClick={() => onEditMovie(movie)}>Edit</button>
      <button onClick={() => onMarkWatched(movie)}>Mark Watched</button>
      <button onClick={() => onRemoveMovie(movie)}>Delete</button>
    </div>
  ),
}));

interface LocalTestContext {
  props: MovieSectionProps;
}

describe("movie-section", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      title: "Test Title",
      subtitle: "My Subtitle",
      list: [
        {
          id: "1",
          title: "Movie #1",
          list: "list1",
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onRemoveMovie: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the section and assing handlers", async ({
    props,
    user,
  }) => {
    render(<MovieSection {...props} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("My Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Movie #1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Edit" }));
    expect(props.onEditMovie).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Mark Watched" }));
    expect(props.onMarkWatched).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onRemoveMovie).toHaveBeenCalled();
  });

  it<LocalTestContext>("should not render the title and subtitle when the title is omitted", ({
    props,
  }) => {
    render(<MovieSection {...props} title={undefined} />);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
    expect(screen.queryByText("My Subtitle")).not.toBeInTheDocument();
    expect(screen.getByText("Movie #1")).toBeInTheDocument();
  });

  it<LocalTestContext>("should not render the subtitle when omitted", ({
    props,
  }) => {
    render(<MovieSection {...props} subtitle={undefined} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("My Subtitle")).not.toBeInTheDocument();
    expect(screen.getByText("Movie #1")).toBeInTheDocument();
  });
});
