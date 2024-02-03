import { useOnWindowResize } from "rooks";

import { useSpring } from "react-spring";
import { type ReactElement, useCallback, useState } from "react";
import {
  TrailerInline,
  TrailerOverlay,
  YouTubePlayerInline,
  YouTubePlayerOverlay,
} from "./trailer.styles";

// This is making an assumption that the youtube player is always 640x360.
// The video is actually varying sizes postioned centered within this by youtube.
const youTubeIframe = {
  width: 640,
  height: 360,
};

export type TrailerProps = {
  trailerId: string;
  overlay?: boolean;
  onComplete: () => void;
};

const Trailer = ({
  trailerId,
  overlay = false,
  onComplete,
}: TrailerProps): ReactElement => {
  const [trailerActive, setTrailerActive] = useState<boolean | null>(null);

  const trailerSpring = useSpring({
    opacity: trailerActive ? 1 : 0,
    onRest: () => {
      if (!trailerActive) {
        onComplete();
      }
    },
  });

  const [trailerNode, setTrailerNode] = useState<HTMLElement | null>(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const updateSize = (node: HTMLElement | null): void => {
    if (!node) return;

    const ratio = Math.max(
      node.clientWidth / youTubeIframe.width,
      node.clientHeight / youTubeIframe.height
    );

    setSize({
      width: youTubeIframe.width * ratio,
      height: youTubeIframe.height * ratio,
    });
  };

  // Callback Ref
  const trailerRef = useCallback((node: HTMLElement | null) => {
    setTrailerNode(node);
    updateSize(node);
  }, []);

  useOnWindowResize(() => {
    trailerNode && updateSize(trailerNode);
  });

  const TrailerLayout = overlay ? TrailerOverlay : TrailerInline;
  const YouTubePlayer = overlay ? YouTubePlayerOverlay : YouTubePlayerInline;

  return (
    <TrailerLayout
      style={trailerSpring}
      ref={trailerRef}
      onClick={(): void => {
        overlay && onComplete();
      }}
      aria-label="Trailer"
    >
      <YouTubePlayer
        videoId={trailerId}
        opts={{
          width: overlay ? "100%" : size.width,
          height: overlay ? "100%" : size.height,
          playerVars: {
            autoplay: 1,
            iv_load_policy: 3,
            modestbranding: 1,
            controls: 0,
          },
        }}
        onReady={(): void => setTrailerActive(true)}
        onEnd={(): void => setTrailerActive(false)}
      />
    </TrailerLayout>
  );
};

export default Trailer;
