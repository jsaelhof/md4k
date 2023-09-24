import { differenceInDays, parseISO } from "date-fns";
import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";

const partitionMovies = (direction) =>
  flow(
    groupBy((movie) => {
      const now = new Date();
      const movieDate = parseISO(movie.addedOn);
      const diff = differenceInDays(now, movieDate);

      if (diff <= 30) {
        return "month";
      } else if (diff <= 90) {
        return "quarter";
      } else if (diff <= 270) {
        return "year";
      } else {
        return "beyond";
      }
    }),
    mapValues((movies) => orderBy(movies, [sort.ADDED], [direction]))
  );

const SortedAdded = ({ movies, ...handlers }) => {
  const { t } = useI18n(listGridStrings);
  const direction = useSortDirection();

  const { month, quarter, year, beyond } = useMemo(
    () => partitionMovies(direction)(movies),
    [direction, movies]
  );

  const sections = useMemo(() => {
    const sectionDescriptors = [
      {
        list: month,
        title: t("list_grid:sorted_added:month.title"),
        subtitle: t("list_grid:sorted_added:month.subtitle"),
      },
      {
        list: quarter,
        title: t("list_grid:sorted_added:quarter.title"),
        subtitle: t("list_grid:sorted_added:quarter.subtitle"),
      },
      {
        list: year,
        title: t("list_grid:sorted_added:year.title"),
        subtitle: t("list_grid:sorted_added:year.subtitle"),
      },
      {
        list: beyond,
        title: t("list_grid:sorted_added:beyond.title"),
        subtitle: t("list_grid:sorted_added:beyond.subtitle"),
      },
    ];

    return [
      ...(direction === sortDirection.ASC
        ? sectionDescriptors.reverse()
        : sectionDescriptors),
    ];
  }, [beyond, direction, month, quarter, t, year]);

  return (
    <span data-testid={sort.ADDED}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedAdded;
