import orderBy from "lodash/orderBy";
import { useMemo } from "react";
import { sort } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";

const SortedTitle = ({ movies, ...handlers }) => {
  const direction = useSortDirection();

  const alphabeticallySorted = useMemo(
    () => orderBy(movies, [sort.TITLE], [direction]),
    [direction, movies]
  );

  return (
    <span data-testid={sort.TITLE}>
      <MovieSection list={alphabeticallySorted} {...handlers} />
    </span>
  );
};

export default SortedTitle;
