import { fireEvent, render, within } from "@testing-library/react";
import SortedRating from "./sorted-rating";
import { vi } from "vitest";
import * as useSortDirectionModule from "../../../../../../../../hooks/use-sort-direction";

vi.mock("../movie/movie", () => ({
  default: ({ onEditMovie, onMarkWatched, onDeleteMovie, movie }) => (
    <div aria-label={movie.title}>
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

describe("sorted-rating", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 0",
          fiveStarRating: 0,
        },
        {
          id: 1,
          title: "Movie 1a",
          fiveStarRating: 0.5,
        },
        {
          id: 2,
          title: "Movie 1b",
          fiveStarRating: 1,
        },
        {
          id: 3,
          title: "Movie 2a",
          fiveStarRating: 1.5,
        },
        {
          id: 4,
          title: "Movie 2b",
          fiveStarRating: 2,
        },
        {
          id: 5,
          title: "Movie 3a",
          fiveStarRating: 2.5,
        },
        {
          id: 6,
          title: "Movie 3b",
          fiveStarRating: 3,
        },
        {
          id: 7,
          title: "Movie 4a",
          fiveStarRating: 3.5,
        },
        {
          id: 8,
          title: "Movie 4b",
          fiveStarRating: 4,
        },
        {
          id: 9,
          title: "Movie 5a",
          fiveStarRating: 4.5,
        },
        {
          id: 10,
          title: "Movie 5b",
          fiveStarRating: 5,
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should only render sections with movies", ({ props }) => {
    const { getAllByLabelText } = render(
      <SortedRating
        {...props}
        movies={props.movies.filter(
          ({ fiveStarRating }) =>
            fiveStarRating === 1 || fiveStarRating === 2 || fiveStarRating === 4
        )}
      />
    );

    // Sorted Sections
    const sections = getAllByLabelText(/Star/);
    expect(sections).toHaveLength(3);
    expect(sections[0]).toHaveAttribute("aria-label", "1 Star");
    expect(sections[1]).toHaveAttribute("aria-label", "2 Star");
    expect(sections[2]).toHaveAttribute("aria-label", "4 Star");
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    const { getByLabelText, getAllByLabelText } = render(
      <SortedRating {...props} />
    );

    // Sorted Sections
    const sections = getAllByLabelText(/Star/);
    expect(sections[0]).toHaveAttribute("aria-label", "0 Star");
    expect(sections[1]).toHaveAttribute("aria-label", "1 Star");
    expect(sections[2]).toHaveAttribute("aria-label", "2 Star");
    expect(sections[3]).toHaveAttribute("aria-label", "3 Star");
    expect(sections[4]).toHaveAttribute("aria-label", "4 Star");
    expect(sections[5]).toHaveAttribute("aria-label", "5 Star");

    // 0 Star Section
    const section0 = within(
      getByLabelText("0 Star").childNodes[1]
    ).getAllByText(/Movie 0/);
    expect(section0).toHaveLength(1);
    expect(section0[0]).toHaveAttribute("aria-label", "Movie 0");

    // 1 Star Section
    const section1 = within(
      getByLabelText("1 Star").childNodes[1]
    ).getAllByText(/Movie 1/);
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 1a");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 1b");

    // 2 Star Section
    const section2 = within(
      getByLabelText("2 Star").childNodes[1]
    ).getAllByText(/Movie 2/);
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 2a");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 2b");

    // 3 Star Section
    const section3 = within(
      getByLabelText("3 Star").childNodes[1]
    ).getAllByText(/Movie 3/);
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 3a");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 3b");

    // 4 Star Section
    const section4 = within(
      getByLabelText("4 Star").childNodes[1]
    ).getAllByText(/Movie 4/);
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 4a");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 4b");

    // 5 Star Section
    const section5 = within(
      getByLabelText("5 Star").childNodes[1]
    ).getAllByText(/Movie 5/);
    expect(section5).toHaveLength(2);
    expect(section5[0]).toHaveAttribute("aria-label", "Movie 5a");
    expect(section5[1]).toHaveAttribute("aria-label", "Movie 5b");
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    // eslint-disable-next-line no-import-assign
    useSortDirectionModule.useSortDirection = vi.fn().mockReturnValue("desc");

    const { getByLabelText, getAllByLabelText } = render(
      <SortedRating {...props} />
    );

    // Sorted Sections
    const sections = getAllByLabelText(/Star/);
    expect(sections[0]).toHaveAttribute("aria-label", "5 Star");
    expect(sections[1]).toHaveAttribute("aria-label", "4 Star");
    expect(sections[2]).toHaveAttribute("aria-label", "3 Star");
    expect(sections[3]).toHaveAttribute("aria-label", "2 Star");
    expect(sections[4]).toHaveAttribute("aria-label", "1 Star");
    expect(sections[5]).toHaveAttribute("aria-label", "0 Star");

    // 0 Star Section
    const section0 = within(
      getByLabelText("0 Star").childNodes[1]
    ).getAllByText(/Movie 0/);
    expect(section0).toHaveLength(1);
    expect(section0[0]).toHaveAttribute("aria-label", "Movie 0");

    // 1 Star Section
    const section1 = within(
      getByLabelText("1 Star").childNodes[1]
    ).getAllByText(/Movie 1/);
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 1a");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 1b");

    // 2 Star Section
    const section2 = within(
      getByLabelText("2 Star").childNodes[1]
    ).getAllByText(/Movie 2/);
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 2a");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 2b");

    // 3 Star Section
    const section3 = within(
      getByLabelText("3 Star").childNodes[1]
    ).getAllByText(/Movie 3/);
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 3a");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 3b");

    // 4 Star Section
    const section4 = within(
      getByLabelText("4 Star").childNodes[1]
    ).getAllByText(/Movie 4/);
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 4a");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 4b");

    // 5 Star Section
    const section5 = within(
      getByLabelText("5 Star").childNodes[1]
    ).getAllByText(/Movie 5/);
    expect(section5).toHaveLength(2);
    expect(section5[0]).toHaveAttribute("aria-label", "Movie 5a");
    expect(section5[1]).toHaveAttribute("aria-label", "Movie 5b");
  });

  it("should call the edit handler", ({ props }) => {
    const { getByText } = render(<SortedRating {...props} />);
    fireEvent.click(
      within(getByText("Movie 1a")).getByRole("button", { name: "Edit" })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });

  it("should call the mark watched handler", ({ props }) => {
    const { getByText } = render(<SortedRating {...props} />);
    fireEvent.click(
      within(getByText("Movie 1a")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });

  it("should call the delete handler", ({ props }) => {
    const { getByText } = render(<SortedRating {...props} />);
    fireEvent.click(
      within(getByText("Movie 1a")).getByRole("button", { name: "Delete" })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });
});
