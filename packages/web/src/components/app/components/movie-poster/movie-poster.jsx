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
import { useIntersectionObserver } from "./hooks/use-intersection-observer";

const MoviePoster = ({
  movie,
  height = 250,
  onClick,
  noLock = false,
  noRel = false,
  variant,
  shadow,
}) => {
  const { ref, visible } = useIntersectionObserver();

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
      aria-label={`${movie.title} Poster`}
      onClick={onClick}
      ref={ref}
    >
      {/* Fallback if the poster is missing or a broken link */}
      <NoPoster
        data-testid="fallback"
        sx={[variant === "zoom" && noPosterZoom, shadow && shadowStyles]}
      >
        <div>{movie.title.length ? movie.title : "No Title"}</div>
      </NoPoster>

      <Poster
        data-testid="poster"
        sx={[
          {
            ...(visible && { backgroundImage: `url(${movie.poster})` }),
          },
          onClick && active,
        ]}
      />

      {movie.locked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
