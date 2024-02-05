import React, { type ReactElement } from "react";

import { ratingsSource } from "md4k-constants";
import { ratingsSourceImage } from "../../../../../../constants/ratings";
import {
  RatingsList,
  RatingsListItem,
  RatingsSourceIcon,
} from "./ratings.styles";
import {
  type Maybe,
  type Ratings as RatingsType,
} from "../../../../../../__generated__/graphql";

export type RatingsProps = {
  ratings?: Maybe<RatingsType>;
  size?: "sm" | "md";
  dense?: boolean;
};

const Ratings = ({
  ratings,
  size = "md",
  dense = false,
}: RatingsProps): ReactElement | null => {
  if (!ratings) return null;

  return (
    <RatingsList $size={size} $dense={dense}>
      {Object.entries(ratings).map(([source, rating]) =>
        ratingsSource[source as keyof typeof ratingsSource] && rating ? (
          <RatingsListItem key={source}>
            <RatingsSourceIcon
              $size={size}
              src={`/images/ratings/${
                ratingsSourceImage[source as keyof typeof ratingsSource]
              }`}
              alt={source}
            />
            {rating}
          </RatingsListItem>
        ) : null
      )}
    </RatingsList>
  );
};

export default React.memo(Ratings);
