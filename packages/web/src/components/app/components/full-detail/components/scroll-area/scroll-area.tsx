import { useSpring } from "react-spring";
import { ReactElement, UIEvent, useCallback, useState } from "react";
import { useOnWindowResize } from "rooks";

import { Layout, Shade, TextArea } from "./scroll-area.styles";
import { Maybe } from "../../../../../../__generated__/graphql";

export type ScrollAreaProps = {
  text?: Maybe<string>;
  noScroll?: boolean;
};

const ScrollArea = ({
  text,
  noScroll = false,
}: ScrollAreaProps): ReactElement => {
  const [topOverflow, setTopOverflow] = useState<boolean | null>(null);
  const [bottomOverflow, setBottomOverflow] = useState<boolean | null>(null);

  const [textNode, setTextNode] = useState<HTMLDivElement | null>(null);

  const updateOverflows = useCallback((element: HTMLDivElement | null) => {
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setTopOverflow(scrollTop > 0);
      setBottomOverflow(scrollHeight - clientHeight - scrollTop > 0);
    }
  }, []);

  // Callback ref: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
  const onPlotRefChange = useCallback(
    (node: HTMLDivElement | null) => {
      // Set the node ref recieved.
      setTextNode(node);

      // Update the scroll positions
      node && updateOverflows(node);
    },
    [updateOverflows]
  );

  const onPlotScroll = useCallback(
    ({ target }: UIEvent<HTMLDivElement>) => {
      updateOverflows(target as HTMLDivElement);
    },
    [updateOverflows]
  );

  useOnWindowResize(() => {
    updateOverflows(textNode);
  });

  const plotShadeTopSpring = useSpring({
    opacity: topOverflow ? 1 : 0,
  });

  const plotShadeBottomSpring = useSpring({
    opacity: bottomOverflow ? 1 : 0,
  });

  return (
    <Layout>
      <TextArea
        ref={onPlotRefChange}
        onScroll={onPlotScroll}
        noScroll={noScroll}
      >
        {text}
      </TextArea>
      <Shade align="top" style={plotShadeTopSpring} data-testid="top" />
      <Shade
        align="bottom"
        style={plotShadeBottomSpring}
        data-testid="bottom"
      />
    </Layout>
  );
};

export default ScrollArea;
