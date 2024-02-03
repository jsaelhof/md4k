import { vi } from "vitest";
import { useChangeBackdrop } from "./useChangeBackdrop";
import { renderHookWithProviders } from "../../../../../../../../../test-utils/render-with-providers";
import { EDIT_MOVIE } from "../../../../../../../../../graphql/mutations";
import { type RenderHookResult, waitFor } from "@testing-library/react";

const MOVIE_MOCK = {
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
};

const EDITED_MOVIE_MOCK = {
  ...MOVIE_MOCK,
  background: "http://image.tmdb.org/t/4.jpg",
};

vi.mock("../../../../../../../../../context/app-context", async () => {
  const actual: any = await vi.importActual(
    "../../../../../../../../../context/app-context"
  );

  return {
    ...actual,
    useAppContext: vi.fn().mockReturnValue({
      list: { id: "saturday" },
    }),
  };
});

const EDIT_MOVIE_MUTATION = {
  request: {
    query: EDIT_MOVIE,
    variables: {
      movie: EDITED_MOVIE_MOCK,
      list: "saturday",
    },
  },
  newData: vi.fn(() => ({
    data: {
      editMovie: EDITED_MOVIE_MOCK,
    },
  })),
};

describe("useChangeBackdrop", () => {
  it("should render the hook", async () => {
    // Passing the MOVIE_MOCK to the render func sets the initial movie having background: http://image.tmdb.org/t/1.jpg (See MOVIE_MOCK)
    // The returned function is called with background: http://image.tmdb.org/t/4.jpg to change it.
    // The test does not need to use toHaveBeenCalledWith because the EDIT_MOVIE_MUTATION is established with http://image.tmdb.org/t/4.jpg in the variables (See EDIT_MOVIE_MUTATION and EDITED_MOVIE_MOCK).
    // If it wasn't called with EDITED_MOVIE_MOCK exactly, the test would fail.
    const { result } = renderHookWithProviders(
      () => useChangeBackdrop(MOVIE_MOCK),
      {
        mocks: [EDIT_MOVIE_MUTATION],
      }
    ) as RenderHookResult<ReturnType<typeof useChangeBackdrop>, null>;

    // Call the returned function with the new backdrop URL.
    result.current("http://image.tmdb.org/t/4.jpg");

    await waitFor(() => expect(EDIT_MOVIE_MUTATION.newData).toHaveBeenCalled());
  });
});
