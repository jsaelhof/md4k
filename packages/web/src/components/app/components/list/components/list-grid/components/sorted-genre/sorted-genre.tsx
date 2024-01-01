import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { ReactElement, useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";
import { ListGridProps } from "../../types";
import { Movie } from "../../../../../../../../__generated__/graphql";

const SortedGenre = ({ movies, ...handlers }: ListGridProps): ReactElement => {
  const { t } = useI18n(listGridStrings);
  const direction = useSortDirection();

  const byGenre = useMemo(() => {
    const partitionMovies = flow(
      groupBy<NonNullable<Movie>>((movie) =>
        t(`common:genres.${movie.genre ?? 0}`)
      ),
      mapValues((movies) =>
        orderBy(movies, [sort.RUNTIME], [sortDirection.ASC])
      )
    );

    return partitionMovies(movies);
  }, [movies, t]);

  const sections = useMemo(() => {
    const sectionDescriptors = Object.entries(byGenre).map(([title, list]) => ({
      title,
      list,
    }));

    return direction === sortDirection.ASC
      ? sectionDescriptors
      : sectionDescriptors.reverse();
  }, [direction, byGenre]);

  return (
    <span data-testid={sort.GENRE}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedGenre;
