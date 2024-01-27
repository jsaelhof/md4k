import { ThirdPartyMovieResolvers } from "../../../__generated__/graphql.js";
import { toFiveStarRating } from "../utils/to-five-star-rating.js";

export const thirdPartyFiveStarRating: ThirdPartyMovieResolvers["fiveStarRating"] =
  ({ ratings }) => toFiveStarRating(ratings);
