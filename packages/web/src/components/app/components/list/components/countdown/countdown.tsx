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
import { type ReactElement } from "react";
import { useSpring } from "react-spring";

export const Countdown = (): ReactElement => {
  // Fade in after a short delay... prevents a quick flash if the loading state elapses quickly
  const fadeSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 0.5,
    },
    config: {
      duration: 1000,
    },
    delay: 1000,
  });

  return (
    <Container style={fadeSpring}>
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
