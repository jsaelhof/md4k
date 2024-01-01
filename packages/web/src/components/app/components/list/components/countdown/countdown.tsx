import times from "lodash/times";

import {
  Circle,
  Container,
  Frame,
  HorizontalLine,
  Needle,
  Number,
  VerticalLine,
} from "./countdown.styles";
import { ReactElement } from "react";

export const Countdown = (): ReactElement => {
  return (
    <Container>
      <Frame>
        <HorizontalLine />
        <VerticalLine />
        <Needle />
        <Circle $size={200} />
        <Circle $size={170} />
        <Number>
          {times(10).map((val) => {
            return (
              <div key={val} style={{ animationDelay: `${val}s` }}>
                {9 - val}
              </div>
            );
          })}
        </Number>
      </Frame>
    </Container>
  );
};
