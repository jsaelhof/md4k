import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { buildMovieMock } from "../../../../../../utils/build-movie-mock";
import WatchedMovie from "./watched-movie";
import { vi } from "vitest";
import { buildThirdPartyMovieMock } from "../../../../../../utils/build-third-party-movie-mock";
import { fireEvent, waitFor, within } from "@testing-library/dom";
import * as mui from "@mui/material";
import { Globals } from "@react-spring/web";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../../../graphql/queries";
import { mockInteresctionObserver } from "../../../../../../utils/mock-intersection-observer";

mockInteresctionObserver();

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: vi.fn().mockReturnValue(false) };
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

describe("watched-movie", () => {
  let test;

  beforeAll(() => {
    Globals.assign({
      skipAnimation: true,
    });
  });

  beforeEach(() => {
    test = {
      props: {
        movie: buildMovieMock({ watchedOn: "2021-09-04T14:00:00.000Z" }),
        right: false,
        isEditing: false,
        onEditMovie: vi.fn(),
        onSave: vi.fn(),
        onCancel: vi.fn(),
        onDelete: vi.fn(),
      },
    };
  });

  afterEach(() => vi.clearAllMocks());

  it("should render the title, date and poster", async () => {
    const { getByLabelText, getByTestId } = await renderWithProviders(
      <WatchedMovie {...test.props} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(
      within(getByTestId("info")).getByText("Test Movie")
    ).toBeInTheDocument();

    expect(
      within(getByTestId("info")).getByText("Saturday, September 4th, 2021")
    ).toBeInTheDocument();

    expect(getByLabelText("Test Movie Poster")).toBeInTheDocument();
  });

  it("should render the poster followed by the info when left-aligned", async () => {
    const { getByTestId } = await renderWithProviders(
      <WatchedMovie {...test.props} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    // Test the order. When left-aligned, the poster should come before the info
    const [posterNode, infoNode] = getByTestId("content").childNodes;
    expect(posterNode.compareDocumentPosition(infoNode)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it("should render the info followed by the poster when right-aligned", async () => {
    const { getByTestId } = await renderWithProviders(
      <WatchedMovie {...test.props} right />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    // Test the order. When right-aligned, the info should come before the poster
    const [infoNode, posterNode] = getByTestId("content").childNodes;
    expect(posterNode.compareDocumentPosition(infoNode)).toBe(
      Node.DOCUMENT_POSITION_PRECEDING
    );
  });

  it("should render the date correctly when the breakpoint is small", async () => {
    // Mock "small"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 550px)");

    const { getByTestId } = await renderWithProviders(
      <WatchedMovie {...test.props} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(
      within(getByTestId("info")).getByText("Saturday, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it("should render the date correctly when the breakpoint is xsmall", async () => {
    // Mock "xsmall"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 430px)");

    const { getByTestId } = await renderWithProviders(
      <WatchedMovie {...test.props} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(
      within(getByTestId("info")).getByText("Sat, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it("should show the date picker inline at larger sizes", async () => {
    const { getByLabelText, getByTestId, queryByRole } =
      await renderWithProviders(<WatchedMovie {...test.props} />, {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      });

    fireEvent.click(getByLabelText("Test Movie"));

    await waitFor(() => {
      expect(getByTestId("datePicker")).toBeInTheDocument();
    });

    expect(queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("should show the date picker in a drawer at small size", async () => {
    // Mock "small"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 550px)");

    const { getByLabelText, getByRole } = await renderWithProviders(
      <WatchedMovie {...test.props} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    fireEvent.click(getByLabelText("Test Movie"));

    await waitFor(() => {
      expect(getByRole("presentation")).toBeInTheDocument();
    });

    expect(
      within(getByRole("presentation")).getByTestId("datePicker")
    ).toBeInTheDocument();
  });

  it("should call onSave with the new date", async () => {
    const { getByLabelText, getByRole, getByTestId } =
      await renderWithProviders(<WatchedMovie {...test.props} />, {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      });

    fireEvent.click(getByLabelText("Test Movie"));

    await waitFor(() => {
      expect(getByTestId("datePicker")).toBeInTheDocument();
    });

    fireEvent.click(getByRole("button", { name: /10th/ }));

    fireEvent.click(getByTestId("CalendarCheckIcon"));

    expect(test.props.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        watchedOn: expect.stringContaining("2021-09-10"),
      })
    );
  });

  it("should call onCancel when clicking the cancel button on the date picker", async () => {
    const { getByLabelText, getByRole, getByTestId } =
      await renderWithProviders(<WatchedMovie {...test.props} />, {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      });

    fireEvent.click(getByLabelText("Test Movie"));

    await waitFor(() => {
      expect(getByTestId("datePicker")).toBeInTheDocument();
    });

    fireEvent.click(getByRole("button", { name: /10th/ }));

    fireEvent.click(getByTestId("CloseIcon"));

    expect(test.props.onCancel).toHaveBeenCalled();

    // TODO: This should test that the date picker is removed after the animation complete.
  });

  it("should call onCancel when clicking the backdrop", async () => {
    const { getByLabelText } = await renderWithProviders(
      <WatchedMovie {...test.props} isEditing />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    fireEvent.click(getByLabelText("Test Movie"));

    expect(test.props.onCancel).toHaveBeenCalled();
  });

  it("should call onDelete with the correct movie data", async () => {
    const { getByLabelText, getByRole, getByTestId } =
      await renderWithProviders(<WatchedMovie {...test.props} />, {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      });

    fireEvent.click(getByLabelText("Test Movie"));

    await waitFor(() => {
      expect(getByTestId("datePicker")).toBeInTheDocument();
    });

    fireEvent.click(getByRole("button", { name: /10th/ }));

    fireEvent.click(getByTestId("DeleteIcon"));

    expect(test.props.onCancel).toHaveBeenCalled();
    expect(test.props.onDelete).toHaveBeenCalledWith(test.props.movie);
  });
});
