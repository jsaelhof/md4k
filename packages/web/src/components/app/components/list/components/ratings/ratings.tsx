import React, { ReactElement } from "react";

import { ratingsSource } from "md4k-constants";
import { ratingsSourceImage } from "../../../../../../constants/ratings";
import {
  denseMargins,
  RatingsList,
  small,
  RatingsListItem,
  ratingsSourceIconSmall,
  RatingsSourceIcon,
} from "./ratings.styles";
import {
  Maybe,
  Ratings as RatingsType,
} from "../../../../../../__generated__/graphql";

export type RatingsProps = {
  ratings?: Maybe<RatingsType>;
  size?: "small" | "medium";
  dense?: boolean;
};

const Ratings = ({
  ratings,
  size = "medium",
  dense = false,
}: RatingsProps): ReactElement | null => {
  if (!ratings) return null;

  return (
    <RatingsList sx={[dense && denseMargins, size === "small" && small]}>
      {Object.entries(ratings).map(([source, rating]) =>
        ratingsSource[source as keyof typeof ratingsSource] && rating ? (
          <RatingsListItem key={source}>
            <RatingsSourceIcon
              sx={[size === "small" && ratingsSourceIconSmall]}
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
