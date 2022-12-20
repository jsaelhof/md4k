export const buildOMDBMovieMock = (mockData = {}) => ({
  imdbID: "tt0258463",
  title: "The Bourne Identity",
  rated: "PG-13",
  actors: ["Franka Potente", "Matt Damon", "Chris Cooper"],
  ratings: {
    id: "tt0258463",
    IMDB: "79%",
    ROTTEN_TOMATOES: "84%",
    METACRITIC: "68%",
  },
  fiveStarRating: 5,
  ...mockData,
});
