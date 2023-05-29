import FullDetail from "./full-detail";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { screen, waitFor } from "@testing-library/dom";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../graphql/queries";
import { buildThirdPartyMovieMock } from "../../../../utils/build-third-party-movie-mock";

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
      thirdPartyMovie: buildThirdPartyMovieMock(),
    },
  },
};

// This test always fails because renderWithProviders has a small sleep
// that waits for the loading state of the mocks to move past "loading: true".
// Mocking loading: true doesn't work.
// https://www.apollographql.com/docs/react/development-testing/testing/#testing-the-loading-and-success-states
// I need to remove that and then update all the tests to use findBy to wait for the post-loading (data) state to appear.
describe.skip("full-detail skeletons", () => {
  it("should render the skeletons when loading", async () => {
    renderWithProviders(
      <FullDetail movie={{ title: "test", imdbID: "tt0258463" }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    screen.debug();

    await waitFor(() =>
      expect(
        document.getElementsByClassName("MuiSkeleton-root").length
      ).toBeGreaterThan(0)
    );
  });
});
