import { Watched } from "./watched";
import { within, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import { vi } from "vitest";
import { GET_WATCHED_MOVIES } from "../../../../graphql/queries/get-watched-movies";
import { REMOVE_MOVIE } from "../../../../graphql/mutations";
import { buildMovieMock } from "../../../../test-utils/build-movie-mock";
import { type WatchedMovieProps } from "./components/watched-movie/watched-movie";
import { type MockedResponse } from "@apollo/client/testing";
import {
  type GetWatchedMoviesQuery,
  type GetWatchedMoviesQueryVariables,
  type RemoveMovieMutation,
  type RemoveMovieMutationVariables,
} from "../../../../__generated__/graphql";

vi.mock("./components/watched-movie/watched-movie", () => ({
  default: ({ movie, onDelete }: WatchedMovieProps) => (
    <div>
      {movie.title}
      <div>
        <button
          onClick={() => {
            onDelete(movie);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  ),
}));

const REMOVE_MOVIE_ERROR_MOCK: MockedResponse<
  RemoveMovieMutation,
  RemoveMovieMutationVariables
> = {
  request: {
    query: REMOVE_MOVIE,
    variables: {
      movieId: "1",
      list: "saturday",
    },
  },
  error: new Error("Test Error"),
};

const GET_WATCHED_MOVIES_MOCK: MockedResponse<
  GetWatchedMoviesQuery,
  GetWatchedMoviesQueryVariables
> = {
  request: {
    query: GET_WATCHED_MOVIES,
    variables: {
      list: "saturday",
    },
  },
  result: {
    data: {
      watchedMovies: [
        buildMovieMock({
          id: "1",
          title: "The Bourne Identity",
          watchedOn: "2022-04-08T02:11:33.166Z",
        }),
      ],
    },
  },
};

describe("watched - error", () => {
  it("should show the error", async ({ user }) => {
    renderWithProviders(<Watched />, {
      mocks: [GET_WATCHED_MOVIES_MOCK, REMOVE_MOVIE_ERROR_MOCK],
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", {
        name: "DELETE",
      })
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    await user.click(within(dialog).getByText("Delete"));

    expect(await screen.findByText(/Houston/)).toBeInTheDocument();
  });
});
