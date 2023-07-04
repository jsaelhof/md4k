import isNil from "lodash/isNil";
import React from "react";

import { RatedContainer } from "./rated.styles";

const Rated = ({ rated }) =>
  isNil(rated) || rated === "Not Rated" ? null : (
    <RatedContainer data-testid="rated">{rated}</RatedContainer>
  );

export default Rated;
