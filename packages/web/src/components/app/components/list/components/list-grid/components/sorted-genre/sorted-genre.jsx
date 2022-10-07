import { orderBy } from "lodash";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import { genres, genreLabels } from "md4k-constants";
import MovieSection from "../movie-section/movie-section";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";

const partitionMovies = flow(
  groupBy((movie) =>
    movie.genre ? genreLabels[movie.genre] : genreLabels[genres.NONE]
  ),
  mapValues((movies) => orderBy(movies, [sort.RUNTIME], [sortDirection.ASC]))
);

const SortedGenre = ({ movies, ...handlers }) => {
  const direction = useSortDirection();

  const byGenre = useMemo(() => partitionMovies(movies), [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = Object.entries(byGenre).map(([title, list]) => ({
      title,
      list,
    }));

    return direction === sortDirection.ASC
      ? sectionDescriptors
      : sectionDescriptors.reverse();
  }, [direction, byGenre]);

  return sections.map((props) => (
    <MovieSection key={props.title} {...props} {...handlers} />
  ));
};

export default SortedGenre;
