import { Watched } from "./watched";
import { fireEvent, within, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { vi } from "vitest";
import { GET_MOVIES } from "../../../../graphql/queries";
import { REMOVE_MOVIE } from "../../../../graphql/mutations";
import { buildMovieMock } from "../../../../utils/build-movie-mock";

vi.mock("./components/watched-movie/watched-movie", () => ({
  default: ({ movie, onDelete }) => (
    <div>
      {movie.title}
      <div>
        <button onClick={() => onDelete(movie)}>DELETE</button>
      </div>
    </div>
  ),
}));

const REMOVE_MOVIE_ERROR_MOCK = {
  request: {
    query: REMOVE_MOVIE,
    variables: {
      movieId: "1",
      list: "saturday",
    },
  },
  result: {
    error: "Test Error",
  },
};

const GET_MOVIES_MOCK = {
  request: {
    query: GET_MOVIES,
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
      movies: [],
    },
  },
};

describe("watched - error", () => {
  it("should show the error", async () => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_MOVIES_MOCK,
      mocks: [REMOVE_MOVIE_ERROR_MOCK],
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    fireEvent.click(
      within(screen.getByText(/Bourne/)).getByRole("button", {
        name: "DELETE",
      })
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    fireEvent.click(within(dialog).getByText("Delete"));

    expect(await screen.findByText(/Houston/)).toBeInTheDocument();
  });
});
