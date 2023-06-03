import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { buildMovieMock } from "../../../../../../utils/build-movie-mock";
import WatchedMovie from "./watched-movie";
import { vi } from "vitest";
import { buildThirdPartyMovieMock } from "../../../../../../utils/build-third-party-movie-mock";
import { within, screen } from "@testing-library/react";
import * as mui from "@mui/material";
import { Globals } from "@react-spring/web";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../../../graphql/queries";

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
  beforeAll(() => {
    Globals.assign({
      skipAnimation: true,
    });
  });

  beforeEach((context) => {
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

  afterEach(() => vi.clearAllMocks());

  it("should render the title, date and poster", ({ props }) => {
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

  it("should render the poster followed by the info when left-aligned", ({
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

  it("should render the info followed by the poster when right-aligned", ({
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

  it("should render the date correctly when the breakpoint is small", ({
    props,
  }) => {
    // Mock "small"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 550px)");

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      within(screen.getByTestId("info")).getByText("Saturday, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it("should render the date correctly when the breakpoint is xsmall", ({
    props,
  }) => {
    // Mock "xsmall"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 430px)");

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      within(screen.getByTestId("info")).getByText("Sat, Sep 4th, 2021")
    ).toBeInTheDocument();
  });

  it("should show the date picker inline at larger sizes", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("should show the date picker in a drawer at small size", async ({
    props,
    user,
  }) => {
    // Mock "small"
    // eslint-disable-next-line no-import-assign
    mui.useMediaQuery = vi
      .fn()
      .mockImplementation((query) => query === "(max-width: 550px)");

    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByRole("presentation")).toBeInTheDocument();

    expect(
      within(screen.getByRole("presentation")).getByTestId("datePicker")
    ).toBeInTheDocument();
  });

  it("should call onSave with the new date", async ({ props, user }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /10th/ }));

    await user.click(screen.getByTestId("CalendarCheckIcon"));

    expect(props.onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        watchedOn: expect.stringContaining("2021-09-10"),
      })
    );
  });

  it("should call onCancel when clicking the cancel button on the date picker", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /10th/ }));

    await user.click(screen.getByTestId("CloseIcon"));

    expect(props.onCancel).toHaveBeenCalled();

    // TODO: This should test that the date picker is removed after the animation complete.
  });

  it("should call onCancel when clicking the backdrop", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} isEditing />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(props.onCancel).toHaveBeenCalled();
  });

  it("should call onDelete with the correct movie data", async ({
    props,
    user,
  }) => {
    renderWithProviders(<WatchedMovie {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    await user.click(screen.getByLabelText("Test Movie"));

    expect(await screen.findByTestId("datePicker")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /10th/ }));

    await user.click(screen.getByTestId("DeleteIcon"));

    expect(props.onCancel).toHaveBeenCalled();
    expect(props.onDelete).toHaveBeenCalledWith(props.movie);
  });
});
