import {
  SectionLayout,
  MovieList,
  MovieSectionTitle,
} from "./movie-section.styles";
import Movie from "../movie/movie";

const MovieSection = ({
  title,
  subtitle,
  list,
  onEditMovie,
  onMarkWatched,
  onDeleteMovie,
}) =>
  list ? (
    <SectionLayout>
      {title && (
        <MovieSectionTitle>
          <div>{title}</div>
          {subtitle && <div>{subtitle}</div>}
        </MovieSectionTitle>
      )}
      <MovieList>
        {list.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onEditMovie={onEditMovie}
            onMarkWatched={onMarkWatched}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </MovieList>
    </SectionLayout>
  ) : null;

export default MovieSection;
