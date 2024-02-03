import times from "lodash/times";
import { Star, StarRatingContainer } from "./five-star-rating.styles";
import { type ReactElement } from "react";
import { type Maybe } from "../../../../__generated__/graphql";

const heights = [16, 18, 20, 18, 16];
const margins = [0, 1, 1.5, 1, 0];

export type FiveStarRatingProps = {
  stars?: Maybe<number>;
};

const FiveStarRating = ({ stars }: FiveStarRatingProps): ReactElement => (
  <StarRatingContainer>
    {times(5, (i) => (
      <Star
        key={i}
        sx={{
          height: heights[i],
          marginBottom: `${margins[i]}px`,
        }}
      >
        {[
          (stars ?? 0) - i >= 1
            ? "star-full"
            : (stars ?? 0) - i === 0.5
            ? "star-half"
            : "star-outline",
        ].map((image) => (
          <img key={i} src={`/images/star/${image}.svg`} alt={image} />
        ))}
      </Star>
    ))}
  </StarRatingContainer>
);

export default FiveStarRating;
