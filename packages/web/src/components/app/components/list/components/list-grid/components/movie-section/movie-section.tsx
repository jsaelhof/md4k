import {
  SectionLayout,
  MovieList,
  MovieSectionTitle,
} from "./movie-section.styles";
import Movie from "../movie/movie";
import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type Movie as MovieType } from "../../../../../../../../__generated__/graphql";
import { type ListGridHandlers } from "../../types";
import { useOnWindowResize } from "../../../../../../../../hooks/use-on-window-resize";

export type MovieSectionProps = ListGridHandlers & {
  ariaLabel?: string;
  title?: ReactNode;
  subtitle?: string;
  list: MovieType[];
};

const MovieSection = ({
  ariaLabel,
  title,
  subtitle,
  list,
  onEditMovie,
  onMarkWatched,
  onRemoveMovie,
}: MovieSectionProps): ReactElement | null => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [titleOffset, setTitleOffset] = useState(0);

  const updateTitleOffset = useCallback(() => {
    setTitleOffset(
      (ref.current?.childNodes[0] as HTMLDivElement)?.getBoundingClientRect()
        .x - (ref.current?.getBoundingClientRect().x ?? 0)
    );
  }, []);

  useEffect(updateTitleOffset, [updateTitleOffset]);

  useOnWindowResize(updateTitleOffset);

  return list ? (
    <SectionLayout
      {...(ariaLabel && { "aria-label": ariaLabel, "data-testid": ariaLabel })}
    >
      {title && (
        <MovieSectionTitle style={{ marginLeft: titleOffset }}>
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
            onRemoveMovie={onRemoveMovie}
          />
        ))}
      </MovieList>
    </SectionLayout>
  ) : null;
};

export default MovieSection;
