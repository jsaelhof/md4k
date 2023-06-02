import { fireEvent, render, within } from "@testing-library/react";
import SortedAdded from "./sorted-added";
import { vi } from "vitest";
import { formatISO, subDays, subMonths } from "date-fns";
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

describe("sorted-added", () => {
  beforeEach((context) => {
    context.props = {
      movies: [
        {
          id: 0,
          title: "Movie 1a",
          addedOn: formatISO(new Date()),
        },
        {
          id: 1,
          title: "Movie 1b",
          addedOn: formatISO(subDays(new Date(), 1)),
        },
        {
          id: 2,
          title: "Movie 2a",
          addedOn: formatISO(subMonths(new Date(), 2)),
        },
        {
          id: 3,
          title: "Movie 2b",
          addedOn: formatISO(subDays(subMonths(new Date(), 2), 1)),
        },
        {
          id: 4,
          title: "Movie 3a",
          addedOn: formatISO(subMonths(new Date(), 8)),
        },
        {
          id: 5,
          title: "Movie 3b",
          addedOn: formatISO(subDays(subMonths(new Date(), 8), 1)),
        },
        {
          id: 6,
          title: "Movie 4a",
          addedOn: formatISO(subMonths(new Date(), 13)),
        },
        {
          id: 7,
          title: "Movie 4b",
          addedOn: formatISO(subDays(subMonths(new Date(), 13), 1)),
        },
      ],
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render correctly when the order is ASC", ({ props }) => {
    const { getByTestId } = render(<SortedAdded {...props} />);

    expect(
      within(getByTestId("addedOn").childNodes[0]).getByText(/Long/)
    ).toBeInTheDocument();
    const section1 = within(getByTestId("addedOn").childNodes[0]).getAllByText(
      /Movie 4/
    );
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 4b");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 4a");

    expect(
      within(getByTestId("addedOn").childNodes[1]).getByText(/Year/)
    ).toBeInTheDocument();
    const section2 = within(getByTestId("addedOn").childNodes[1]).getAllByText(
      /Movie 3/
    );
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 3b");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 3a");

    expect(
      within(getByTestId("addedOn").childNodes[2]).getByText(/While/)
    ).toBeInTheDocument();
    const section3 = within(getByTestId("addedOn").childNodes[2]).getAllByText(
      /Movie 2/
    );
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 2b");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 2a");

    expect(
      within(getByTestId("addedOn").childNodes[3]).getByText(/Recently/)
    ).toBeInTheDocument();
    const section4 = within(getByTestId("addedOn").childNodes[3]).getAllByText(
      /Movie 1/
    );
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 1b");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 1a");
  });

  it("should render correctly when the order is DESC", ({ props }) => {
    // eslint-disable-next-line no-import-assign
    useSortDirectionModule.useSortDirection = vi.fn().mockReturnValue("desc");

    const { getByTestId } = render(<SortedAdded {...props} />);

    expect(
      within(getByTestId("addedOn").childNodes[0]).getByText(/Recently/)
    ).toBeInTheDocument();
    const section1 = within(getByTestId("addedOn").childNodes[0]).getAllByText(
      /Movie 1/
    );
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 1a");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 1b");

    expect(
      within(getByTestId("addedOn").childNodes[1]).getByText(/While/)
    ).toBeInTheDocument();
    const section2 = within(getByTestId("addedOn").childNodes[1]).getAllByText(
      /Movie 2/
    );
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 2a");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 2b");

    expect(
      within(getByTestId("addedOn").childNodes[2]).getByText(/Year/)
    ).toBeInTheDocument();
    const section3 = within(getByTestId("addedOn").childNodes[2]).getAllByText(
      /Movie 3/
    );
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 3a");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 3b");

    expect(
      within(getByTestId("addedOn").childNodes[3]).getByText(/Long/)
    ).toBeInTheDocument();
    const section4 = within(getByTestId("addedOn").childNodes[3]).getAllByText(
      /Movie 4/
    );
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 4a");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 4b");
  });

  it("should call the edit handler", ({ props }) => {
    const { getByText } = render(<SortedAdded {...props} />);
    fireEvent.click(
      within(getByText("Movie 1a")).getByRole("button", { name: "Edit" })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });

  it("should call the mark watched handler", ({ props }) => {
    const { getByText } = render(<SortedAdded {...props} />);
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
    const { getByText } = render(<SortedAdded {...props} />);
    fireEvent.click(
      within(getByText("Movie 1a")).getByRole("button", { name: "Delete" })
    );
    expect(props.onDeleteMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });
});
