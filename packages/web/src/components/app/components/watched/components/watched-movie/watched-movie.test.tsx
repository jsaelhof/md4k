import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";
import { buildMovieMock } from "../../../../../../test-utils/build-movie-mock";
import WatchedMovie, { type WatchedMovieProps } from "./watched-movie";
import { vi } from "vitest";
import { buildThirdPartyMovieMock } from "../../../../../../test-utils/build-third-party-movie-mock";
import { within, screen } from "@testing-library/react";
import { Globals } from "@react-spring/web";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../../../graphql/queries";

const { MOCK_USE_MEDIA_QUERY } = vi.hoisted(() => ({
  MOCK_USE_MEDIA_QUERY: vi.fn().mockReturnValue(false),
}));

vi.mock("@mui/material", async () => {
  const actual: any = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: MOCK_USE_MEDIA_QUERY };
});

const GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK = {
  request: {
    query: GET_THIRD_PARTY_MOVIE_FULL_DETAILS,
    variables: {
      imdbID: "tt7374948",
    },
  },
  result: {
    data: {
      thirdPartyMovie: buildThirdPartyMovieMock(),
    },
  },
};

interface LocalTestContext {
  props: WatchedMovieProps;
}

describe("watched-movie", () => {
  beforeAll(() => {
    Globals.assign({
      skipAnimation: true,
    });
  });

  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movie: buildMovieMock({ watchedOn: "2021-09-04T14:00:00.000Z" }),
      right: false,
      isEditing: false,
      onEditMovie: vi.fn(),
      onSave: vi.fn(),
      onCancel: vi.fn(),
      onDelete: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the title, date and poster", ({
    props,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      within(screen.getByTestId("info")).getByText("Test Movie")
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("info")).getByText(
        "Saturday, September 4th, 2021"
      )
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Test Movie Poster")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the backdrop when the movie has a background", async ({
    props,
  }) => {
    renderWithProviders(
      <WatchedMovie
        {...props}
        movie={{ ...props.movie, background: "https://movie_background" }}
      />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(
      await screen.findByTestId("https://movie_background")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the backdrop when the third party data has a backdrop and the movie does not", async ({
    props,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByTestId("http://image.tmdb.org/t/1.jpg")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the poster followed by the info when left-aligned", ({
    props,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    // Test the order. When left-aligned, the poster should come before the info
    const [posterNode, infoNode] = screen.getByTestId("content").childNodes;
    expect(posterNode.compareDocumentPosition(infoNode)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it<LocalTestContext>("should render the info followed by the poster when right-aligned", ({
    props,
  }) => {
    renderWithProviders(<WatchedMovie {...props} right />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    // Test the order. When right-aligned, the info should come before the poster
    const [infoNode, posterNode] = screen.getByTestId("content").childNodes;
    expect(posterNode.compareDocumentPosition(infoNode)).toBe(
      Node.DOCUMENT_POSITION_PRECEDING
    );
  });

  it<LocalTestContext>("should render the date correctly when the breakpoint is small", ({
    props,
  }) => {
    // Mock "small"
    MOCK_USE_MEDIA_QUERY.mockImplementation(
      (query) => query === "(max-width: 550px)"
    );

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      within(screen.getByTestId("info")).getByText("Saturday, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the date correctly when the breakpoint is xsmall", ({
    props,
  }) => {
    // Mock "xsmall"
    MOCK_USE_MEDIA_QUERY.mockImplementation(
      (query) => query === "(max-width: 430px)"
    );

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      within(screen.getByTestId("info")).getByText("Sat, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should show the date picker inline at larger sizes", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    expect(screen.queryByTestId("datePickerDrawer")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should show the date picker in a drawer at small size", async ({
    props,
    user,
  }) => {
    // Mock "small"
    MOCK_USE_MEDIA_QUERY.mockImplementation(
      (query) => query === "(max-width: 550px)"
    );

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePickerDrawer")).toBeInTheDocument();

    expect(
      within(screen.getByTestId("datePickerDrawer")).getByTestId("datePicker")
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should call onSave with the new date", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("gridcell", { name: "10" }));

    await user.click(screen.getByTestId("CalendarCheckIcon"));

    expect(props.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        watchedOn: expect.stringContaining("2021-09-10"),
      })
    );
  });

  it<LocalTestContext>("should call onCancel when clicking the cancel button on the date picker", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("gridcell", { name: "10" }));

    await user.click(screen.getByTestId("CloseIcon"));

    expect(props.onCancel).toHaveBeenCalled();

    // TODO: This should test that the date picker is removed after the animation complete.
  });

  it<LocalTestContext>("should call onCancel when clicking the backdrop", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} isEditing />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(props.onCancel).toHaveBeenCalled();
  });

  it<LocalTestContext>("should call onDelete with the correct movie data", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("gridcell", { name: "10" }));

    await user.click(screen.getByTestId("DeleteIcon"));

    expect(props.onCancel).toHaveBeenCalled();
    expect(props.onDelete).toHaveBeenCalledWith(props.movie);
  });
});
