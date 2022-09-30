import TheatresIcon from "@mui/icons-material/Theaters";

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

const MoviePoster = ({
  movie,
  height = 250,
  onClick,
  noLock = false,
  noRel = false,
  variant,
  shadow,
}) => {
  const posterStyles = {
    width: height * 0.64,
    height,
  };

  return (
    <PosterLayout
      style={{
        ...(!noRel && { position: "relative" }),
      }}
    >
      {/* Fallback if the poster is missing or a broken link */}
      <NoPoster
        aria-label="Movie Poster"
        sx={[
          posterStyles,
          variant === "zoom" && noPosterZoom,
          shadow && shadowStyles,
        ]}
        onClick={onClick}
      >
        <TheatresIcon sx={{ fontSize: variant === "zoom" ? 60 : 40 }} />
        <div>{movie.title.length ? movie.title : "No Title"}</div>
      </NoPoster>

      <Poster
        aria-label="Movie Poster"
        sx={[
          posterStyles,
          {
            backgroundImage: `url(${movie.poster})`,
          },
          onClick && active,
          movie.locked && !noLock && locked,
        ]}
        onClick={onClick}
      />

      {movie.locked && !noLock && <Lock />}
    </PosterLayout>
  );
};

export default MoviePoster;
