import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import FiveStarRating from "../../../../../five-star-rating/five-star-rating";

const partitionMovies = flow(
  groupBy(({ fiveStarRating }) =>
    fiveStarRating ? Math.ceil(fiveStarRating) : 0
  ),
  mapValues((movies) =>
    orderBy(
      movies,
      [sort.RATING, sort.TITLE],
      [sortDirection.DESC, sortDirection.ASC]
    )
  )
);

const SortedRating = ({ movies, ...handlers }) => {
  const direction = useSortDirection();

  const byRating = useMemo(() => partitionMovies(movies), [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = Object.entries(byRating).map(
      ([stars, list]) => ({
        title: <FiveStarRating stars={stars} />,
        list,
        stars,
      })
    );

    return direction === sortDirection.ASC
      ? sectionDescriptors
      : sectionDescriptors.reverse();
  }, [direction, byRating]);

  return (
    <span data-testid={sort.RATING}>
      {sections.map(({ stars, ...props }) => (
        <MovieSection key={stars} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedRating;
