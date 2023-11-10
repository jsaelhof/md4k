import { useI18n } from "../../../../hooks/use-i18n";
import {
  active,
  Lock,
  locked,
  NoPoster,
  noPosterZoom,
  Poster,
  PosterLayout,
  shadowStyles,
} from "./movie-poster.styles";
import { useInViewRef } from "rooks/dist/esm/hooks/useInViewRef";
import moviePosterStrings from "./i18n/i18n";
import { useCallback, useState } from "react";

const IDLE_TIMEOUT = 10000;

const MoviePoster = ({
  movie,
  height = 250,
  onClick,
  noLock = false,
  noRel = false,
  variant,
  shadow,
  delayLoadingWhenNotInView = false,
}) => {
  const { t } = useI18n(moviePosterStrings);

  // Tracks if the poster is in view
  const [ref, inView] = useInViewRef();

  // Tracks when the poster image should load
  const [visible, setVisible] = useState(inView || !delayLoadingWhenNotInView);

  // If the poster image doesn't load immediately, wait for some idle time and the nstart loading it even if it hasn't come into view yet.
  const onIdle = useCallback(
    (deadline) => {
      if (!visible) {
        if (deadline.didTimeout || deadline.timeRemaining() > 30) {
          setVisible(true);
        } else {
          requestIdleCallback(onIdle, { timeout: IDLE_TIMEOUT });
        }
      }
    },
    [visible]
  );

  requestIdleCallback(onIdle, { timeout: IDLE_TIMEOUT });

  return (
    <PosterLayout
      sx={[
        !noRel && { position: "relative" },
        movie.locked && !noLock && locked,
        {
          width: height * 0.64,
          height,
        },
      ]}
      aria-label={t("movie_poster:label", { title: movie.title })}
      onClick={onClick}
      ref={ref}
    >
      {/* Fallback if the poster is missing or a broken link */}
      <NoPoster
        data-testid="fallback"
        sx={[variant === "zoom" && noPosterZoom, shadow && shadowStyles]}
      >
        <div>
          {movie.title.length ? movie.title : t("movie_poster:no_title")}
        </div>
      </NoPoster>

      <Poster
        data-testid="poster"
        sx={[
          {
            ...((inView || visible) && {
              backgroundImage: `url(${movie.poster})`,
            }),
          },
          onClick && active,
        ]}
      />

      {movie.locked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
