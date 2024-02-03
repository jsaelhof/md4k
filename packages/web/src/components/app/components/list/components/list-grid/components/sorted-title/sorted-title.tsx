import orderBy from "lodash/orderBy";
import { type ReactElement, useMemo } from "react";
import { sort } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { type ListGridProps } from "../../types";

const SortedTitle = ({ movies, ...handlers }: ListGridProps): ReactElement => {
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
