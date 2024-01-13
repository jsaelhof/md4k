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
import { ReactElement } from "react";
import { Maybe } from "../../../../__generated__/graphql";
import { useTranslation } from "react-i18next";

export type MoviePosterProps = {
  // This only requires a few key props of a movie which allows other types like SearchResult to be used.
  movie: {
    title?: Maybe<string>;
    poster?: Maybe<string>;
    locked?: Maybe<boolean>;
  };
  height?: number;
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
  const { t } = useTranslation(["movie_poster"]);
  const [ref, visible] = useInViewRef();

  const isLocked = movie.locked ?? false;

  return (
    <PosterLayout
      sx={[
        !noRel && { position: "relative" },
        isLocked && !noLock && locked,
        {
          width: height * 0.64,
          height,
        },
      ]}
      aria-label={t("movie_poster:label", {
        title: movie.title ?? t("movie_poster:no_title"),
      })}
      onClick={onClick}
      ref={ref}
    >
      {/* Fallback if the poster is missing or a broken link */}
      <NoPoster
        data-testid="fallback"
        sx={[variant === "zoom" && noPosterZoom, shadow && shadowStyles]}
      >
        <div>{movie.title ? movie.title : t("movie_poster:no_title")}</div>
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

      {isLocked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
