import orderBy from "lodash/orderBy";
import { type ReactElement, useMemo } from "react";
import { sort, SortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { type Movie } from "../../../../../../../../__generated__/graphql";
import { type ListGridProps } from "../../types";
import { useTranslation } from "react-i18next";

type RuntimeGroup = {
  short: "short";
  regular: "regular";
  long: "long";
  unknown: "unknown";
};

const SortedRuntime = ({
  movies,
  ...handlers
}: ListGridProps): ReactElement => {
  const { t } = useTranslation(["list_grid"]);
  const direction = useSortDirection();
  const reverse = direction === SortDirection.DESC;

  const { unknown, short, regular, long } = useMemo(
    () =>
      Object.entries(
        (movies ?? []).reduce<Record<keyof RuntimeGroup, Movie[]>>(
          (grouped, movie) => {
            if (!movie.runtime) {
              grouped.unknown.push(movie);
            } else if (movie.runtime <= 6000) {
              grouped.short.push(movie);
            } else if (movie.runtime <= 7800) {
              grouped.regular.push(movie);
            } else {
              grouped.long.push(movie);
            }
            return grouped;
          },
          {
            short: [],
            regular: [],
            long: [],
            unknown: [],
          }
        )
      ).reduce<Record<keyof RuntimeGroup, Movie[]>>(
        (grouped, [group, movies]) => {
          grouped[group as keyof RuntimeGroup] = orderBy(
            movies,
            [sort.RUNTIME],
            [direction]
          );
          return grouped;
        },
        {
          short: [],
          regular: [],
          long: [],
          unknown: [],
        }
      ),
    [direction, movies]
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
      ...(reverse ? sectionDescriptors.reverse() : sectionDescriptors),
      {
        list: unknown,
        title: t("list_grid:sorted_runtime.unknown.title"),
      },
    ];
  }, [long, regular, reverse, short, t, unknown]);

  return (
    <span data-testid={sort.RUNTIME}>
      {sections.map((props) =>
        props.list.length > 0 ? (
          <MovieSection key={props.title} {...props} {...handlers} />
        ) : null
      )}
    </span>
  );
};

export default SortedRuntime;
