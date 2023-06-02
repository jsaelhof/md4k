import FullDetail from "./full-detail";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../graphql/queries";
import { buildThirdPartyMovieMock } from "../../../../utils/build-third-party-movie-mock";
import { screen } from "@testing-library/dom";

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

describe("full-detail skeletons", () => {
  it("should render the skeletons when loading", async () => {
    renderWithProviders(
      <FullDetail movie={{ title: "test", imdbID: "tt0258463" }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_MOCK],
      }
    );

    expect((await screen.findAllByTestId("skeleton")).length).toBeGreaterThan(
      0
    );
  });
});
