import { Lock, NoPoster, Poster, PosterLayout } from "./movie-poster.styles";
import { useState, type ReactElement } from "react";
import { type Maybe } from "../../../../__generated__/graphql";
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

  const isLocked = movie.locked ?? false;

  const [brokenPoster, setBrokenPoster] = useState(false);

  return (
    <PosterLayout
      $height={height}
      $noRel={noRel}
      $locked={isLocked && !noLock}
      aria-label={t("movie_poster:label", {
        title: movie.title ?? t("movie_poster:no_title"),
      })}
      onClick={onClick}
    >
      {/* Fallback if the poster is missing or a broken link */}
      <NoPoster
        data-testid="fallback"
        $disableZoom={variant === "zoom"}
        $shadow={shadow}
        $active={!!onClick}
      >
        <div>{movie.title ? movie.title : t("movie_poster:no_title")}</div>
      </NoPoster>

      {movie.poster && !brokenPoster && (
        <Poster
          data-testid="poster"
          src={movie.poster}
          loading="lazy"
          $active={!!onClick}
          onError={() => setBrokenPoster(true)}
        />
      )}

      {isLocked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
