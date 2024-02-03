import isNil from "lodash/isNil";
import React, { type ReactElement } from "react";
import { RatedContainer } from "./rated.styles";
import { type Maybe } from "../../../../../../__generated__/graphql";

export type RatedProps = {
  rated?: Maybe<string>;
};

const Rated = ({ rated }: RatedProps): ReactElement | null =>
  isNil(rated) || rated === "Not Rated" ? null : (
    <RatedContainer data-testid="rated">{rated}</RatedContainer>
  );

export default Rated;
