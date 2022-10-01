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
}) => (
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
  >
    {/* Fallback if the poster is missing or a broken link */}
    <NoPoster
      data-testid="fallback"
      sx={[variant === "zoom" && noPosterZoom, shadow && shadowStyles]}
    >
      <TheatresIcon sx={{ fontSize: variant === "zoom" ? 60 : 40 }} />
      <div>{movie.title.length ? movie.title : "No Title"}</div>
    </NoPoster>

    <Poster
      data-testid="poster"
      sx={[
        {
          backgroundImage: `url(${movie.poster})`,
        },
        onClick && active,
      ]}
    />

    {movie.locked && !noLock && <Lock />}
  </PosterLayout>
);

export default MoviePoster;
