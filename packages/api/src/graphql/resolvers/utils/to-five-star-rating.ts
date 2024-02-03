import lodash from "lodash";
import lodashfp from "lodash/fp.js";
import { ratingsSources } from "md4k-constants";
import { type Maybe } from "graphql/jsutils/Maybe.js";

const { isNil } = lodash;
const { filter, flow, map, mean, pick } = lodashfp;

export const toFiveStarRating = flow(
  pick(ratingsSources),
  filter((rating: Maybe<string>) => !isNil(rating)),
  map((rating: string) => parseInt(rating)),
  mean,
  (val) => (isNaN(val) ? 0 : Math.round(val / 10) / 2)
);
