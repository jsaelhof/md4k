import { type ThirdPartyMovie } from "../__generated__/graphql";

export const buildThirdPartyMovieMock = (
  mockData: Partial<ThirdPartyMovie> = {}
): ThirdPartyMovie => ({
  imdbID: "tt0258463",
  title: "The Bourne Identity",
  rated: "PG-13",
  runtime: 7140,
  ratings: {
    id: "tt0258463",
    IMDB: "79%",
    ROTTEN_TOMATOES: "84%",
    METACRITIC: "68%",
  },
  fiveStarRating: 5,
  backdrop: "http://image.tmdb.org/t/1.jpg",
  backdrops: [
    "http://image.tmdb.org/t/1.jpg",
    "http://image.tmdb.org/t/2.jpg",
    "http://image.tmdb.org/t/3.jpg",
    "http://image.tmdb.org/t/4.jpg",
  ],
  trailer: {
    site: "YouTube",
    key: "2tqK_3mKQUw",
  },
  plot: "Wounded to the brink of death",
  ...mockData,
});
