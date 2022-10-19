import {
  SectionLayout,
  MovieList,
  MovieSectionTitle,
} from "./movie-section.styles";
import Movie from "../movie/movie";
import { useCallback, useEffect, useRef, useState } from "react";
import { useOnWindowResize } from "rooks";

const MovieSection = ({
  title,
  subtitle,
  list,
  onEditMovie,
  onMarkWatched,
  onDeleteMovie,
}) => {
  const ref = useRef();
  const [titleOffset, setTitleOffset] = useState(0);

  const updateTitleOffset = useCallback(() => {
    setTitleOffset(
      ref.current?.childNodes[0]?.getBoundingClientRect().x -
        ref.current?.getBoundingClientRect().x
    );
  }, []);

  useEffect(updateTitleOffset, [updateTitleOffset]);
  useOnWindowResize(updateTitleOffset);

  return list ? (
    <SectionLayout>
      {title && (
        <MovieSectionTitle style={{ paddingLeft: titleOffset }}>
          <div>{title}</div>
          {subtitle && <div>{subtitle}</div>}
        </MovieSectionTitle>
      )}
      <MovieList ref={ref}>
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
};

export default MovieSection;
