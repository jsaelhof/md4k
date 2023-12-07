import orderBy from "lodash/orderBy";
import flow from "lodash/fp/flow";
import groupBy from "lodash/fp/groupBy";
import mapValues from "lodash/fp/mapValues";
import thru from "lodash/fp/thru";
import toPairs from "lodash/fp/toPairs";
import { useMemo } from "react";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";
import {
  sourceLabels,
  sourceLogosLarge,
} from "../../../../../../../../constants/sources";

const SortedSource = ({ movies, ...handlers }) => {
  const { t } = useI18n(listGridStrings);
  const direction = useSortDirection();

  const bySource = useMemo(() => {
    const partitionMovies = flow(
      groupBy((movie) => movie.source ?? 0),
      mapValues((movies) => orderBy(movies, [sort.TITLE], [sortDirection.ASC])),
      toPairs,
      // Move the first source (0: none) to the end
      thru((arr) => [...arr.slice(1), arr[0]])
    );

    return partitionMovies(movies);
  }, [movies]);

  const sections = useMemo(() => {
    const sectionDescriptors = bySource.map(([source, list]) => ({
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
