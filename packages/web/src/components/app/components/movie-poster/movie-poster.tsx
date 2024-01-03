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
import { ReactElement } from "react";
import { Movie } from "../../../../__generated__/graphql";

export type MoviePosterProps = {
  movie: Movie;
  height: number;
  onClick?: () => void;
  noLock?: boolean;
  noRel?: boolean;
  variant?: "default" | "zoom";
  shadow?: boolean;
};

const MoviePoster = ({
  movie,
  height = 250,
  onClick,
  noLock = false,
  noRel = false,
  variant = "default",
  shadow = false,
}: MoviePosterProps): ReactElement => {
  const { t } = useI18n(moviePosterStrings);
  const [ref, visible] = useInViewRef();

  return (
    <PosterLayout
      sx={[
        !noRel && { position: "relative" },
        !!movie.locked && !noLock && locked,
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
            ...(visible && { backgroundImage: `url(${movie.poster})` }),
          },
          !!onClick && active,
        ]}
      />

      {movie.locked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
