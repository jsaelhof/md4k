import { Lock, NoPoster, Poster, PosterLayout } from "./movie-poster.styles";
import { useInViewRef } from "rooks/dist/esm/hooks/useInViewRef";
import { type ReactElement } from "react";
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
  const [ref, visible] = useInViewRef();

  const isLocked = movie.locked ?? false;

  return (
    <PosterLayout
      $height={height}
      $noRel={noRel}
      $locked={isLocked && !noLock}
      aria-label={t("movie_poster:label", {
        title: movie.title ?? t("movie_poster:no_title"),
      })}
      onClick={onClick}
      ref={ref}
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

      <Poster
        data-testid="poster"
        $poster={visible && movie.poster}
        $active={!!onClick}
      />

      {isLocked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
