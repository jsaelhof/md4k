import { type Movie } from "../__generated__/graphql";
import { type GetMovieItem } from "../graphql/types";

export const buildMovieMock = (
  mockData: Partial<Movie> = {}
): GetMovieItem => ({
  __typename: "Movie",
  id: "0e916dfd-7302-41f4-913f-72b2ea3ba2c0",
  title: "Test Movie",
  list: "saturday",
  runtime: 6060,
  source: 1,
  genre: 1,
  year: "2019",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMGM2NWFjYTctZjFiYy00YzIxLThhY2QtY2UxZTNmNjdjZTU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  imdbID: "tt7374948",
  locked: false,
  addedOn: "2021-05-02T16:21:08.696Z",
  watchedOn: null,
  ratings: {
    id: "0e916dfd-7302-41f4-913f-72b2ea3ba2c0",
    IMDB: "68%",
    ROTTEN_TOMATOES: "90%",
    METACRITIC: "64%",
    __typename: "Ratings",
  },
  background: null,
  fiveStarRating: 4.5,
  ...mockData,
});
