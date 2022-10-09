import { orderBy } from "lodash";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";

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
  const direction = useSortDirection();

  const { unknown, short, regular, long } = useMemo(
    () => partitionMovies(movies),
    [movies]
  );

  const sections = useMemo(() => {
    const sectionDescriptors = [
      {
        list: short,
        title: "Short Movies",
        subtitle: "About an hour and a half",
      },
      {
        list: regular,
        title: "Regular Movies",
        subtitle: "About two hours",
      },
      {
        list: long,
        title: "Long Movies",
        subtitle: "More than two hours",
      },
    ];

    return [
      ...(direction === sortDirection.ASC
        ? sectionDescriptors
        : sectionDescriptors.reverse()),
      { list: unknown, title: "No Runtime" },
    ];
  }, [direction, long, regular, short, unknown]);

  return (
    <span data-testid={sort.RUNTIME}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedRuntime;
