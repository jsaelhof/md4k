import { type MovieResolvers } from "../../../__generated__/graphql.js";
import { toFiveStarRating } from "../utils/to-five-star-rating.js";

export const fiveStarRating: MovieResolvers["fiveStarRating"] = ({ ratings }) =>
  toFiveStarRating(ratings);
