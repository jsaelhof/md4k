import orderBy from "lodash/orderBy";
import { flow, groupBy, mapValues } from "lodash/fp";
import { type ReactElement, useMemo } from "react";
import { sort, SortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { type Movie } from "../../../../../../../../__generated__/graphql";
import { type ListGridProps } from "../../types";
import { useTranslation } from "react-i18next";

const partitionMovies = flow(
  groupBy<NonNullable<Movie>>((movie) => {
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
  mapValues((movies) => orderBy(movies, [sort.RUNTIME], [SortDirection.ASC]))
);

const SortedRuntime = ({
  movies,
  ...handlers
}: ListGridProps): ReactElement => {
  const { t } = useTranslation(["list_grid"]);
  const direction = useSortDirection();
  const reverse = direction === SortDirection.DESC;

  const { unknown, short, regular, long } = useMemo(
    () => partitionMovies(movies),
    [movies]
  );

  const sections = useMemo(() => {
    const sectionDescriptors = [
      {
        list: reverse ? short.reverse() : short,
        title: t("list_grid:sorted_runtime.short.title"),
        subtitle: t("list_grid:sorted_runtime.short.subtitle"),
      },
      {
        list: reverse ? regular.reverse() : regular,
        title: t("list_grid:sorted_runtime.regular.title"),
        subtitle: t("list_grid:sorted_runtime.regular.subtitle"),
      },
      {
        list: reverse ? long.reverse() : long,
        title: t("list_grid:sorted_runtime.long.title"),
        subtitle: t("list_grid:sorted_runtime.long.subtitle"),
      },
    ];

    return [
      ...(reverse ? sectionDescriptors.reverse() : sectionDescriptors),
      {
        list: reverse ? unknown.reverse() : unknown,
        title: t("list_grid:sorted_runtime.unknown.title"),
      },
    ];
  }, [long, regular, reverse, short, t, unknown]);

  return (
    <span data-testid={sort.RUNTIME}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedRuntime;
