export const ratingsSource = {
  IMDB: "IMDB",
  ROTTEN_TOMATOES: "ROTTEN_TOMATOES",
  METACRITIC: "METACRITIC",
} as const;

export const ratingsSources = [
  ratingsSource.IMDB,
  ratingsSource.ROTTEN_TOMATOES,
  ratingsSource.METACRITIC,
];
