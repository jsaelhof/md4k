import { render, within, screen } from "@testing-library/react";
import SortedSource from "./sorted-source";
import { vi } from "vitest";
import { sources } from "md4k-constants";

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
          title: "Movie 0 - NONE",
          source: sources.NONE,
        },
        {
          id: 1,
          title: "Movie 1 - NETFLIX",
          source: sources.NETFLIX,
        },
        {
          id: 2,
          title: "Movie 2 - PRIME VIDEO",
          source: sources.PRIME_VIDEO,
        },
        {
          id: 3,
          title: "Movie 3 - APPLE TV",
          source: sources.APPLE_TV,
        },
        {
          id: 4,
          title: "Movie 4 - PLEX",
          source: sources.PLEX,
        },
        {
          id: 5,
          title: "Movie 5 - DVD",
          source: sources.DVD,
        },
        {
          id: 6,
          title: "Movie 6 - DISNEY PLUS",
          source: sources.DISNEY_PLUS,
        },
        {
          id: 7,
          title: "Movie 7 - TUBI",
          source: sources.TUBI_TV,
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
      within(screen.getByTestId("source").childNodes[0]).getByAltText("Plex")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[0]).getByText(
        "Movie 4 - PLEX"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[1]).getByAltText("Netflix")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[1]).getByText(
        "Movie 1 - NETFLIX"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[2]).getByAltText(
        "Prime Video"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[2]).getByText(
        "Movie 2 - PRIME VIDEO"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[3]).getByAltText("Disney+")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[3]).getByText(
        "Movie 6 - DISNEY PLUS"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[4]).getByAltText(
        "AppleTV+"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[4]).getByText(
        "Movie 3 - APPLE TV"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[5]).getByAltText("Tubi")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[5]).getByText(
        "Movie 7 - TUBI"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[6]).getByAltText("DVD")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[6]).getByText(
        "Movie 5 - DVD"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[7]).getByAltText("None")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[7]).getByText(
        "Movie 0 - NONE"
      )
    ).toBeInTheDocument();
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedSource {...props} />);

    expect(
      within(screen.getByTestId("source").childNodes[7]).getByAltText("Plex")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[7]).getByText(
        "Movie 4 - PLEX"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[6]).getByAltText("Netflix")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[6]).getByText(
        "Movie 1 - NETFLIX"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[5]).getByAltText(
        "Prime Video"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[5]).getByText(
        "Movie 2 - PRIME VIDEO"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[4]).getByAltText("Disney+")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[4]).getByText(
        "Movie 6 - DISNEY PLUS"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[3]).getByAltText(
        "AppleTV+"
      )
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[3]).getByText(
        "Movie 3 - APPLE TV"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[2]).getByAltText("Tubi")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[2]).getByText(
        "Movie 7 - TUBI"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[1]).getByAltText("DVD")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[1]).getByText(
        "Movie 5 - DVD"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("source").childNodes[0]).getByAltText("None")
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("source").childNodes[0]).getByText(
        "Movie 0 - NONE"
      )
    ).toBeInTheDocument();
  });

  it("should call the edit handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1 - NETFLIX")).getByRole("button", {
        name: "Edit",
      })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1 - NETFLIX" })
    );
  });

  it("should call the mark watched handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1 - NETFLIX")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1 - NETFLIX" })
    );
  });

  it("should call the delete handler", async ({ props, user }) => {
    render(<SortedSource {...props} />);
    await user.click(
      within(screen.getByText("Movie 1 - NETFLIX")).getByRole("button", {
        name: "Delete",
      })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1 - NETFLIX" })
    );
  });
});
