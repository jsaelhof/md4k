import FullDetail from "./full-detail";
import { waitFor, screen } from "@testing-library/react";
import { sources } from "md4k-constants";
import { vi, beforeEach } from "vitest";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import { createMatchMedia } from "../../../../test-utils/create-match-media";
import { buildThirdPartyMovieMock } from "../../../../test-utils/build-third-party-movie-mock";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../graphql/queries";

vi.mock("uuid", () => ({
  v4: () => "111-222-333",
}));

vi.mock("react-youtube", () => ({
  default: () => <div data-testid="youtube" />,
}));

const GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK = {
  request: {
    query: GET_THIRD_PARTY_MOVIE_FULL_DETAILS,
    variables: {
      imdbID: "tt0258463",
    },
  },
  result: {
    data: {
      thirdPartyMovie: buildThirdPartyMovieMock({
        source: 7,
      }),
    },
  },
};

const mockOnChangeBackdrop = vi.fn();

describe("full-detail", () => {
  beforeEach((context) => {
    context.props = {
      movie: {
        id: "8502fd8b-165e-4239-965f-b46f8d523829",
        title: "The Bourne Identity",
        list: "saturday",
        runtime: 7140,
        source: 1,
        genre: 3,
        year: "2002",
        poster: "https://m.media-amazon.com/images/M/SX300.jpg",
        imdbID: "tt0258463",
        locked: false,
        addedOn: "2022-03-15T04:28:22.166Z",
        watchedOn: null,
        ratings: {
          id: "8502fd8b-165e-4239-965f-b46f8d523829",
          IMDB: "79%",
          ROTTEN_TOMATOES: "84%",
          METACRITIC: "68%",
        },
        background: "http://image.tmdb.org/t/1.jpg",
      },
      showCloseButton: false,
      onClose: vi.fn(),
      onAddMovie: vi.fn(),
      onChangeBackdrop: mockOnChangeBackdrop,
    };

    context.list = {
      id: "saturday",
      label: "Saturday Night",
    };

    window.open = vi.fn();
  });

  it("should render the movie details", async ({ props }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByLabelText(/Bourne.*Poster/)).toBeInTheDocument();
    expect(screen.getByText("1h 59m")).toBeInTheDocument();
    expect(screen.getByText("2002")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("PG-13")).toBeInTheDocument();
    expect(
      screen.getByText("Wounded to the brink of death")
    ).toBeInTheDocument();
  });

  it("should render the None when genre is undefined", async ({ props }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, genre: undefined }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(await screen.findByText("No Genre")).toBeInTheDocument();
  });

  it("should render the None when genre is null", async ({ props }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, genre: null }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(await screen.findByText("No Genre")).toBeInTheDocument();
  });

  it("should search when the movie poster is clicked", async ({
    props,
    user,
  }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByLabelText(/Bourne.*Poster/)).toBeInTheDocument();
    await user.click(screen.getByLabelText(/Bourne.*Poster/));
    expect(window.open).toHaveBeenCalledWith(
      expect.stringMatching(/themoviedb.*Bourne/),
      "moviedb"
    );
  });

  it("should show the close button", async ({ props, user }) => {
    renderWithProviders(<FullDetail {...props} showCloseButton={true} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    // Need to wait for loading to finish because there is a skeleton close button as well.
    expect(await screen.findByLabelText(/Bourne.*Poster/)).toBeInTheDocument();

    await user.click(screen.getByTestId("CloseThickIcon"));
    expect(props.onClose).toHaveBeenCalled();
  });

  it("should show the background saved to the DB if present", async ({
    props,
  }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByTestId("http://image.tmdb.org/t/1.jpg")
    ).toBeInTheDocument();
  });

  it("should show the first backdrop in the list if no background is in the DB", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail
        {...props}
        movie={{ ...props.movie, background: undefined }}
      />,
      { mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK] }
    );

    expect(
      await screen.findByTestId("http://image.tmdb.org/t/1.jpg")
    ).toBeInTheDocument();
  });

  it("should change to the previous background when the left button is pressed", async ({
    props,
    user,
  }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByTestId("ChevronLeftIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("ChevronLeftIcon"));
    expect(mockOnChangeBackdrop).toHaveBeenCalledWith(
      "http://image.tmdb.org/t/4.jpg"
    );
  });

  it("should change to the next background when the right button is pressed", async ({
    props,
    user,
  }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByTestId("ChevronRightIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("ChevronRightIcon"));
    expect(mockOnChangeBackdrop).toHaveBeenCalledWith(
      "http://image.tmdb.org/t/2.jpg"
    );
  });

  it("should launch the trailer", async ({ props, user }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
    expect(screen.queryByLabelText("Trailer")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Watch Trailer" }));
    expect(screen.getByLabelText("Trailer")).toBeInTheDocument();
  });

  it("should launch the trailer as an overlay", async ({ props, user }) => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
    expect(screen.queryByLabelText("Trailer")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Watch Trailer" }));
    const trailerElement = screen.getByLabelText("Trailer");
    expect(document.body).toContainElement(trailerElement);
  });

  it("should show a logo for the source and stream the movie when clicked", async ({
    props,
    user,
  }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByAltText(sourceLabels[1])).toBeInTheDocument();
    await user.click(screen.getByAltText(sourceLabels[1]));
    expect(window.open).toHaveBeenCalledWith(
      expect.stringMatching(/netflix.*Bourne/),
      "movieView"
    );
  });

  it("should use the movie source when available", async ({ props }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByAltText(sourceLabels[1])).toBeInTheDocument();
  });

  it("should use the movie source when available and 0 (falsy)", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: 0 }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(await screen.findByAltText(sourceLabels[0])).toBeInTheDocument();
  });

  it("should use the third party data source when available and movie source is not", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: undefined }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect(await screen.findByAltText(sourceLabels[7])).toBeInTheDocument();
  });

  it("should use the third party data source when it is 0 and movie source is not", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: undefined }} />,
      {
        mocks: [
          {
            ...GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK,
            result: { data: buildThirdPartyMovieMock({ source: 0 }) },
          },
        ],
      }
    );

    expect(await screen.findByAltText(sourceLabels[0])).toBeInTheDocument();
  });

  it("should use source.NONE when both the movie and the third party data have no source", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: undefined }} />,
      {
        mocks: [
          {
            ...GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK,
            result: { data: buildThirdPartyMovieMock({ source: undefined }) },
          },
        ],
      }
    );

    expect(await screen.findByAltText(sourceLabels[0])).toBeInTheDocument();
  });

  it("should not stream when the source logo is DVD", async ({
    props,
    user,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: sources.DVD }} />,
      { mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK] }
    );

    expect(
      await screen.findByAltText(sourceLabels[sources.DVD])
    ).toBeInTheDocument();
    await user.click(screen.getByAltText(sourceLabels[sources.DVD]));
    expect(window.open).not.toHaveBeenCalled();
  });

  it("should not stream when the source logo is None", async ({
    props,
    user,
  }) => {
    renderWithProviders(
      <FullDetail
        {...props}
        movie={{ ...props.movie, source: sources.NONE }}
      />,
      { mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK] }
    );

    expect(
      await screen.findByAltText(sourceLabels[sources.NONE])
    ).toBeInTheDocument();
    await user.click(screen.getByAltText(sourceLabels[sources.NONE]));
    expect(window.open).not.toHaveBeenCalled();
  });

  it("should show a stream option when the source is streamable and open the stream site", async ({
    props,
    user,
  }) => {
    window.open = vi.fn();

    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByRole("button", { name: "Stream Movie" })
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Stream Movie" }));
    expect(window.open).toHaveBeenCalledWith(
      expect.stringMatching(/netflix.*Bourne/),
      "movieView"
    );
  });

  it("should not show a stream option when the source is not streamable", async ({
    props,
  }) => {
    renderWithProviders(
      <FullDetail {...props} movie={{ ...props.movie, source: sources.DVD }} />,
      { mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK] }
    );

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Stream Movie" })
      ).not.toBeInTheDocument()
    );
  });

  it("should show a search torrent option when the source is NONE and open the torrent site", async ({
    props,
    user,
  }) => {
    window.open = vi.fn();

    renderWithProviders(
      <FullDetail
        {...props}
        movie={{ ...props.movie, source: sources.NONE }}
      />,
      { mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK] }
    );

    expect(
      await screen.findByRole("button", { name: "Torrent Search" })
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Torrent Search" }));
    expect(window.open).toHaveBeenCalledWith(
      expect.stringMatching(/1337x.to.*Bourne/),
      "movieView"
    );
  });

  it("should render the footer buttons", async ({ props }) => {
    renderWithProviders(<FullDetail {...props} />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(await screen.findByAltText("Search TMDB")).toBeInTheDocument();
    expect(await screen.findByAltText("Search IMDB")).toBeInTheDocument();
    expect(
      await screen.findByAltText("Search Common Sense Media")
    ).toBeInTheDocument();
  });

  it("should render the view actions for viewMovie", async ({ props }) => {
    renderWithProviders(<FullDetail {...props} actionSet="viewMovie" />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Stream Movie" })
    ).toBeInTheDocument();
  });

  it("should render the view actions for addMovie", async ({ props }) => {
    renderWithProviders(<FullDetail {...props} actionSet="addMovie" />, {
      mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
    });

    expect(
      await screen.findByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });
});
