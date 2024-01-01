import orderBy from "lodash/orderBy";
import flow from "lodash/fp/flow";
import groupBy from "lodash/fp/groupBy";
import mapValues from "lodash/fp/mapValues";
import toPairs from "lodash/fp/toPairs";
import reduce from "lodash/fp/reduce";
import { ReactElement, useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";
import {
  sourceLabels,
  sourceLogosLarge,
} from "../../../../../../../../constants/sources";
import { sources } from "md4k-constants";
import { ListGridProps } from "../../types";
import { Movie } from "../../../../../../../../__generated__/graphql";
import { notEmpty } from "../../../../../../../../utils/not-empty";

const preferredSourceOrder: number[] = [
  sources.PLEX,
  sources.NETFLIX,
  sources.PRIME_VIDEO,
  sources.DISNEY_PLUS,
  sources.APPLE_TV,
  sources.TUBI_TV,
  sources.DVD,
  sources.NONE,
];

const SortedSource = ({ movies, ...handlers }: ListGridProps): ReactElement => {
  const { t } = useI18n(listGridStrings);
  const direction = useSortDirection();

  const bySource = useMemo(() => {
    const partitionMovies: (movies: Movie[]) => [number, Movie[]][] = flow(
      groupBy<NonNullable<Movie>>((movie) => movie.source ?? 0),
      mapValues<Movie[], Movie[]>((movies) =>
        orderBy(movies, [sort.TITLE], [sortDirection.ASC])
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

    return partitionMovies(movies);
  }, [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = bySource
      .filter(notEmpty)
      .map(([source, list]) => ({
        title: (
          <img
            src={sourceLogosLarge[source]}
            width="120px"
            alt={sourceLabels[source]}
          />
        ),
        list,
        ariaLabel: t(`common:sources.${source ?? 0}`),
        source,
      }));

    return direction === sortDirection.ASC
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
