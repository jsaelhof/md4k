import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";

const partitionMovies = flow(
  groupBy((movie) => {
    if (!movie.runtime) {
      return "unknown";
    } else if (movie.runtime <= 6000) {
      return "short";
    } else if (movie.runtime <= 7800) {
      return "regular";
    } else {
      return "long";
    }
  }),
  mapValues((movies) => orderBy(movies, [sort.RUNTIME], [sortDirection.ASC]))
);

const SortedRuntime = ({ movies, ...handlers }) => {
  const { t } = useI18n(listGridStrings);
  const direction = useSortDirection();

  const { unknown, short, regular, long } = useMemo(
    () => partitionMovies(movies),
    [movies]
  );

  const sections = useMemo(() => {
    const sectionDescriptors = [
      {
        list: short,
        title: t("list_grid:sorted_runtime.short.title"),
        subtitle: t("list_grid:sorted_runtime.short.subtitle"),
      },
      {
        list: regular,
        title: t("list_grid:sorted_runtime.regular.title"),
        subtitle: t("list_grid:sorted_runtime.regular.subtitle"),
      },
      {
        list: long,
        title: t("list_grid:sorted_runtime.long.title"),
        subtitle: t("list_grid:sorted_runtime.long.subtitle"),
      },
    ];

    return [
      ...(direction === sortDirection.ASC
        ? sectionDescriptors
        : sectionDescriptors.reverse()),
      { list: unknown, title: t("list_grid:sorted_runtime.unknown.title") },
    ];
  }, [direction, long, regular, short, t, unknown]);

  return (
    <span data-testid={sort.RUNTIME}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedRuntime;
