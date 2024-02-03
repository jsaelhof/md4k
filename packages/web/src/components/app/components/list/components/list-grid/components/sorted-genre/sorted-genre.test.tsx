import { render, within, screen } from "@testing-library/react";
import SortedGenre from "./sorted-genre";
import { vi } from "vitest";
import { type MovieProps } from "../movie/movie";
import { type ListGridProps } from "../../types";

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

describe("sorted-genre", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movies: [
        {
          id: "0",
          title: "Movie 1",
          genre: 1,
        },
        {
          id: "1",
          title: "Movie 2",
          genre: 2,
        },
        {
          id: "2",
          title: "Movie 3",
          genre: 3,
        },
        {
          id: "3",
          title: "Movie 4",
          genre: 4,
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
    render(<SortedGenre {...props} />);

    expect(
      within(
        screen.getByTestId("genre").childNodes[0] as HTMLElement
      ).getByText(/Comedy/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[0] as HTMLElement
      ).getByText("Movie 1")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[1] as HTMLElement
      ).getByText(/Drama/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[1] as HTMLElement
      ).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[2] as HTMLElement
      ).getByText(/Action/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[2] as HTMLElement
      ).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[3] as HTMLElement
      ).getByText(/Sci-Fi/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[3] as HTMLElement
      ).getByText("Movie 4")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should render correctly when the order is DESC", ({
    props,
  }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedGenre {...props} />);

    expect(
      within(
        screen.getByTestId("genre").childNodes[0] as HTMLElement
      ).getByText(/Sci-Fi/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[0] as HTMLElement
      ).getByText("Movie 4")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[1] as HTMLElement
      ).getByText(/Action/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[1] as HTMLElement
      ).getByText("Movie 3")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[2] as HTMLElement
      ).getByText(/Drama/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[2] as HTMLElement
      ).getByText("Movie 2")
    ).toBeInTheDocument();

    expect(
      within(
        screen.getByTestId("genre").childNodes[3] as HTMLElement
      ).getByText(/Comedy/)
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("genre").childNodes[3] as HTMLElement
      ).getByText("Movie 1")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should call the edit handler", async ({
    props,
    user,
  }) => {
    render(<SortedGenre {...props} />);
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
    render(<SortedGenre {...props} />);
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
    render(<SortedGenre {...props} />);
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
