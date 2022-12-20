import FullDetail from "./full-detail";
import { GET_MOVIE_EXTENDED_DETAILS } from "../../../../graphql/queries/get-movie-extended-details";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { buildOMDBMovieMock } from "../../../../utils/build-omdb-movie-mock";
import { buildTMDBMovieMock } from "../../../../utils/build-tmdb-movie-mock";
import { waitFor } from "@testing-library/dom";

vi.mock("uuid", () => ({
  v4: () => "111-222-333",
}));

vi.mock("react-youtube", () => ({
  default: () => <div data-testid="youtube" />,
}));

const GET_MOVIE_EXTENDED_DETAILS_LOADING_MOCK = {
  request: {
    query: GET_MOVIE_EXTENDED_DETAILS,
    variables: {
      imdbID: "tt0258463",
    },
  },
  result: {
    loading: true,
    data: {
      omdbMovie: buildOMDBMovieMock(),
      tmdbMovie: buildTMDBMovieMock(),
    },
  },
};

describe("full-detail skeletons", () => {
  it("should render the skeletons when loading", async () => {
    await renderWithProviders(
      <FullDetail movie={{ title: "test", imdbID: "tt0258463" }} />,
      {
        mocks: [GET_MOVIE_EXTENDED_DETAILS_LOADING_MOCK],
      }
    );

    await waitFor(() =>
      expect(
        document.getElementsByClassName("MuiSkeleton-root").length
      ).toBeGreaterThan(0)
    );
  });
});
