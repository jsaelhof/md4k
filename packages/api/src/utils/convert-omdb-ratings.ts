import { fromOmdbSource } from "../constants/ratings.js";

import { ratingsSources, ratingsSource } from "md4k-constants";
import { OMDBMovie } from "../graphql/types/omdb.types.js";

const normalizeRating = (source: string, value: string) => {
  switch (source) {
    case ratingsSource.IMDB:
      return `${parseFloat(value.replace("/10", "")) * 10}%`;
    case ratingsSource.METACRITIC:
      return `${value.replace("/100", "")}%`;
    default:
      return value;
  }
};

export const convertOmdbRatings = (ratings: OMDBMovie["Ratings"] = []) =>
  ratings
    .filter(({ Source }) => ratingsSources.includes(fromOmdbSource[Source]))
    .reduce<{ [key: string]: string }>((acc, { Source, Value }) => {
      acc[fromOmdbSource[Source]] = normalizeRating(
        fromOmdbSource[Source],
        Value
      );
      return acc;
    }, {});
