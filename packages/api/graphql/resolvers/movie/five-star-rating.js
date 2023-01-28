import lodash from "lodash";
import lodashfp from "lodash/fp.js";
import { ratingsSources } from "md4k-constants";

const { isNil } = lodash;
const { filter, flow, map, mean, pick } = lodashfp;

const toFiveStarRating = flow(
  pick(ratingsSources),
  filter((rating) => !isNil(rating)),
  map((rating) => parseInt(rating)),
  mean,
  (val) => (isNaN(val) ? 0 : Math.round(val / 10) / 2)
);

export const fiveStarRating = ({ ratings }) => {
  return toFiveStarRating(ratings);
};
