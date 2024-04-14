import { render, within, screen } from "@testing-library/react";
import SortedAdded from "./sorted-added";
import { vi } from "vitest";
import { formatISO, subDays, subMonths } from "date-fns";
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
    <div aria-label={movie.title}>
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

describe("sorted-added", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movies: [
        {
          id: "0",
          title: "Movie 1a",
          addedOn: formatISO(new Date()),
          list: "list1",
        },
        {
          id: "1",
          title: "Movie 1b",
          addedOn: formatISO(subDays(new Date(), 1)),
          list: "list1",
        },
        {
          id: "2",
          title: "Movie 2a",
          addedOn: formatISO(subMonths(new Date(), 2)),
          list: "list1",
        },
        {
          id: "3",
          title: "Movie 2b",
          addedOn: formatISO(subDays(subMonths(new Date(), 2), 1)),
          list: "list1",
        },
        {
          id: "4",
          title: "Movie 3a",
          addedOn: formatISO(subMonths(new Date(), 8)),
          list: "list1",
        },
        {
          id: "5",
          title: "Movie 3b",
          addedOn: formatISO(subDays(subMonths(new Date(), 8), 1)),
          list: "list1",
        },
        {
          id: "6",
          title: "Movie 4a",
          addedOn: formatISO(subMonths(new Date(), 13)),
          list: "list1",
        },
        {
          id: "7",
          title: "Movie 4b",
          addedOn: formatISO(subDays(subMonths(new Date(), 13), 1)),
          list: "list1",
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
    render(<SortedAdded {...props} />);

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[0] as HTMLElement
      ).getByText(/Long/)
    ).toBeInTheDocument();
    const section1 = within(
      screen.getByTestId("addedOn").childNodes[0] as HTMLElement
    ).getAllByText(/Movie 4/);
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 4b");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 4a");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[1] as HTMLElement
      ).getByText(/Year/)
    ).toBeInTheDocument();
    const section2 = within(
      screen.getByTestId("addedOn").childNodes[1] as HTMLElement
    ).getAllByText(/Movie 3/);
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 3b");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 3a");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[2] as HTMLElement
      ).getByText(/While/)
    ).toBeInTheDocument();
    const section3 = within(
      screen.getByTestId("addedOn").childNodes[2] as HTMLElement
    ).getAllByText(/Movie 2/);
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 2b");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 2a");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[3] as HTMLElement
      ).getByText(/Recently/)
    ).toBeInTheDocument();
    const section4 = within(
      screen.getByTestId("addedOn").childNodes[3] as HTMLElement
    ).getAllByText(/Movie 1/);
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 1b");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 1a");
  });

  it<LocalTestContext>("should render correctly when the order is DESC", ({
    props,
  }) => {
    MOCK_USE_SORT_DIRECTION.mockReturnValue("desc");

    render(<SortedAdded {...props} />);

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[0] as HTMLElement
      ).getByText(/Recently/)
    ).toBeInTheDocument();
    const section1 = within(
      screen.getByTestId("addedOn").childNodes[0] as HTMLElement
    ).getAllByText(/Movie 1/);
    expect(section1).toHaveLength(2);
    expect(section1[0]).toHaveAttribute("aria-label", "Movie 1a");
    expect(section1[1]).toHaveAttribute("aria-label", "Movie 1b");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[1] as HTMLElement
      ).getByText(/While/)
    ).toBeInTheDocument();
    const section2 = within(
      screen.getByTestId("addedOn").childNodes[1] as HTMLElement
    ).getAllByText(/Movie 2/);
    expect(section2).toHaveLength(2);
    expect(section2[0]).toHaveAttribute("aria-label", "Movie 2a");
    expect(section2[1]).toHaveAttribute("aria-label", "Movie 2b");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[2] as HTMLElement
      ).getByText(/Year/)
    ).toBeInTheDocument();
    const section3 = within(
      screen.getByTestId("addedOn").childNodes[2] as HTMLElement
    ).getAllByText(/Movie 3/);
    expect(section3).toHaveLength(2);
    expect(section3[0]).toHaveAttribute("aria-label", "Movie 3a");
    expect(section3[1]).toHaveAttribute("aria-label", "Movie 3b");

    expect(
      within(
        screen.getByTestId("addedOn").childNodes[3] as HTMLElement
      ).getByText(/Long/)
    ).toBeInTheDocument();
    const section4 = within(
      screen.getByTestId("addedOn").childNodes[3] as HTMLElement
    ).getAllByText(/Movie 4/);
    expect(section4).toHaveLength(2);
    expect(section4[0]).toHaveAttribute("aria-label", "Movie 4a");
    expect(section4[1]).toHaveAttribute("aria-label", "Movie 4b");
  });

  it<LocalTestContext>("should call the edit handler", async ({
    props,
    user,
  }) => {
    render(<SortedAdded {...props} />);
    await user.click(
      within(screen.getByText("Movie 1a")).getByRole("button", {
        name: "Edit",
      })
    );
    expect(props.onEditMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });

  it<LocalTestContext>("should call the mark watched handler", async ({
    props,
    user,
  }) => {
    render(<SortedAdded {...props} />);
    await user.click(
      within(screen.getByText("Movie 1a")).getByRole("button", {
        name: "Mark Watched",
      })
    );
    expect(props.onMarkWatched).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });

  it<LocalTestContext>("should call the delete handler", async ({
    props,
    user,
  }) => {
    render(<SortedAdded {...props} />);
    await user.click(
      within(screen.getByText("Movie 1a")).getByRole("button", {
        name: "Delete",
      })
    );
    expect(props.onRemoveMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Movie 1a" })
    );
  });
});
