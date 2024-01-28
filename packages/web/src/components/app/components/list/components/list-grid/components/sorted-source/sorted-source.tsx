import orderBy from "lodash/orderBy";
import flow from "lodash/fp/flow";
import groupBy from "lodash/fp/groupBy";
import mapValues from "lodash/fp/mapValues";
import toPairs from "lodash/fp/toPairs";
import reduce from "lodash/fp/reduce";
import { ReactElement, useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, SortDirection } from "../../../../../../../../constants/sorts";
import { sourceLogosLarge } from "../../../../../../../../constants/sources";
import { Source } from "md4k-constants";
import { ListGridProps } from "../../types";
import { Movie } from "../../../../../../../../__generated__/graphql";
import { notEmpty } from "../../../../../../../../utils/not-empty";
import { useTranslation } from "react-i18next";
import resources from "../../../../../../../../__generated__/resources";

const preferredSourceOrder: number[] = [
  Source.PLEX,
  Source.NETFLIX,
  Source.PRIME_VIDEO,
  Source.DISNEY_PLUS,
  Source.APPLE_TV,
  Source.TUBI_TV,
  Source.DVD,
  Source.NONE,
];

const SortedSource = ({ movies, ...handlers }: ListGridProps): ReactElement => {
  const { t } = useTranslation(["list_grid", "common"]);
  const direction = useSortDirection();

  const bySource = useMemo(() => {
    const partitionMovies: (movies: Movie[]) => [number, Movie[]][] = flow(
      groupBy<NonNullable<Movie>>((movie) => movie.source ?? 0),
      mapValues<Movie[], Movie[]>((movies) =>
        orderBy(movies, [sort.TITLE], [SortDirection.ASC])
      ),
      toPairs,
      reduce<[string, Movie[]], [number, Movie[]][]>(
        (acc, [source, movies]) => {
          acc[preferredSourceOrder.indexOf(parseInt(source))] = [
            parseInt(source),
            movies,
          ];
          return acc;
        },
        Array(preferredSourceOrder.length).fill(null)
      )
    );

    return partitionMovies(movies ?? []);
  }, [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = bySource
      .filter(notEmpty)
      .map(([source, list]) => ({
        title: (
          <img
            src={sourceLogosLarge[source as keyof typeof sourceLogosLarge]}
            width="120px"
            alt={t(
              `common:sources.${
                source.toString() as keyof typeof resources.common.sources
              }`
            )}
          />
        ),
        list,
        ariaLabel: t(
          `common:sources.${
            source.toString() as keyof typeof resources.common.sources
          }`
        ) as string, // TODO: Can't figure out why the t function is returning unknown here.
        source,
      }));

    return direction === SortDirection.ASC
      ? sectionDescriptors
      : sectionDescriptors.reverse();
  }, [direction, bySource, t]);

  return (
    <span data-testid={sort.SOURCE}>
      {sections.map((props) => (
        <MovieSection key={props.source} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedSource;
