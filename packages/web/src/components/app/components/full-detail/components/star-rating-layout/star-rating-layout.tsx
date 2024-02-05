import { type ReactElement, useState } from "react";
import { animated, useSpring } from "react-spring";
import debounce from "lodash/debounce";
import { useMediaQuery } from "@mui/material";

import { RatingContainer } from "./star-rating-layout.styles";
import FiveStarRating from "../../../five-star-rating/five-star-rating";
import Ratings from "../../../list/components/ratings/ratings";
import {
  type Maybe,
  type Ratings as RatingsGQLType,
} from "../../../../../../__generated__/graphql";

export type StarRatingLayoutProps = {
  ratings?: Maybe<RatingsGQLType>;
  stars?: Maybe<number>;
};

export const StarRatingLayout = ({
  ratings,
  stars,
}: StarRatingLayoutProps): ReactElement => {
  const centered = useMediaQuery("(max-width: 660px)");
  const [showRatings, setShowRatings] = useState(false);

  const displayRatings = debounce(() => setShowRatings(true), 500);
  const ratingsSpring = useSpring({
    opacity: showRatings ? 1 : -0.25,
    ...(centered && { marginTop: showRatings ? 16 : -16, marginLeft: 0 }),
    ...(!centered && { marginLeft: showRatings ? 0 : -32, marginTop: 0 }),
  });

  return (
    <RatingContainer
      onMouseEnter={displayRatings}
      onMouseLeave={(): void => {
        displayRatings.cancel();
        setShowRatings(false);
      }}
      onClick={(): void => {
        // OnClick, toggle the state.
        // Works for desktop and mobile but mainly here for mobile.
        setShowRatings(!showRatings);
      }}
      data-testid="starRatingLayout"
    >
      <FiveStarRating stars={stars} />
      <animated.div style={ratingsSpring} data-testid="ratingsBreakdown">
        <Ratings ratings={ratings} size="sm" dense />
      </animated.div>
    </RatingContainer>
  );
};
