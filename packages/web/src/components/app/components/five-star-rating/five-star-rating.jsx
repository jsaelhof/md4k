import times from "lodash/times";
import { Star, StarRatingContainer } from "./five-star-rating.styles";

const heights = [16, 18, 20, 18, 16];
const margins = [0, 1, 1.5, 1, 0];

const FiveStarRating = ({ stars }) => {
  return (
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
            stars - i >= 1
              ? "star-full"
              : stars - i === 0.5
              ? "star-half"
              : "star-outline",
          ].map((image) => (
            <img key={i} src={`/images/star/${image}.svg`} alt={image} />
          ))}
        </Star>
      ))}
    </StarRatingContainer>
  );
};

export default FiveStarRating;
