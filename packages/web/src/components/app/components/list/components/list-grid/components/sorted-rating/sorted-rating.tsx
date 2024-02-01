import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { ReactElement, useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, SortDirection } from "../../../../../../../../constants/sorts";
import FiveStarRating from "../../../../../five-star-rating/five-star-rating";
import { Movie } from "../../../../../../../../__generated__/graphql";
import { ListGridProps } from "../../types";
import { useTranslation } from "react-i18next";

const partitionMovies = flow(
  groupBy<NonNullable<Movie>>(({ fiveStarRating }) =>
    fiveStarRating ? Math.ceil(fiveStarRating) : 0
  ),
  mapValues((movies) =>
    orderBy(
      movies,
      [sort.RATING, sort.TITLE],
      [SortDirection.DESC, SortDirection.ASC]
    )
  )
);

const SortedRating = ({ movies, ...handlers }: ListGridProps): ReactElement => {
  const { t } = useTranslation(["list_grid"]);
  const direction = useSortDirection();

  const byRating = useMemo(() => partitionMovies(movies), [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = Object.entries(byRating).map(
      ([stars, list]) => ({
        title: <FiveStarRating stars={parseInt(stars)} />,
        list,
        ariaLabel: t("list_grid:sorted_rating.stars", { stars }),
        stars,
      })
    );

    return direction === SortDirection.ASC
      ? sectionDescriptors
      : sectionDescriptors.reverse();
  }, [direction, byRating, t]);

  return (
    <span data-testid={sort.RATING}>
      {sections.map(({ ...props }) => (
        <MovieSection key={props.stars} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedRating;
