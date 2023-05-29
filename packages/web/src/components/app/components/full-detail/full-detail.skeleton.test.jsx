import FullDetail from "./full-detail";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { waitFor } from "@testing-library/dom";
import { GET_THIRD_PARTY_MOVIE_FULL_DETAILS } from "../../../../graphql/queries";

vi.mock("uuid", () => ({
  v4: () => "111-222-333",
}));

vi.mock("react-youtube", () => ({
  default: () => <div data-testid="youtube" />,
}));

const GET_THIRD_PARTY_MOVIE_FULL_DETAILS_LOADING_MOCK = {
  request: {
    query: GET_THIRD_PARTY_MOVIE_FULL_DETAILS,
    variables: {
      imdbID: "tt0258463",
    },
  },
  result: {
    loading: true,
    data: null,
  },
};

describe("full-detail skeletons", () => {
  it("should render the skeletons when loading", async () => {
    renderWithProviders(
      <FullDetail movie={{ title: "test", imdbID: "tt0258463" }} />,
      {
        mocks: [GET_THIRD_PARTY_MOVIE_FULL_DETAILS_LOADING_MOCK],
      }
    );

    await waitFor(() =>
      expect(
        document.getElementsByClassName("MuiSkeleton-root").length
      ).toBeGreaterThan(0)
    );
  });
});
