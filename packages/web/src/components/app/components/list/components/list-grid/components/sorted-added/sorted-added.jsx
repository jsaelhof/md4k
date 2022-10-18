import { differenceInDays, parseISO } from "date-fns";
import { orderBy } from "lodash";
import { flow, groupBy, mapValues } from "lodash/fp";
import { useMemo } from "react";
import { sort, sortDirection } from "../../../../../../../../constants/sorts";
import { useSortDirection } from "../../../../../../../../hooks/use-sort-direction";
import MovieSection from "../movie-section/movie-section";

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
  const direction = useSortDirection();

  const { month, quarter, year, beyond } = useMemo(
    () => partitionMovies(direction)(movies),
    [direction, movies]
  );

  const sections = useMemo(() => {
    const sectionDescriptors = [
      {
        list: month,
        title: "Added Recently",
        subtitle: "Less than 30 days on the list",
      },
      {
        list: quarter,
        title: "Added A While Ago",
        subtitle: "Less than 90 days on the list",
      },
      {
        list: year,
        title: "Added Within A Year",
        subtitle: "Less than 365 days on the list",
      },
      {
        list: beyond,
        title: "A Long Time Ago",
        subtitle: "More than 365 days on the list",
      },
    ];

    return [
      ...(direction === sortDirection.ASC
        ? sectionDescriptors.reverse()
        : sectionDescriptors),
    ];
  }, [beyond, direction, month, quarter, year]);

  return (
    <span data-testid={sort.ADDED}>
      {sections.map((props) => (
        <MovieSection key={props.title} {...props} {...handlers} />
      ))}
    </span>
  );
};

export default SortedAdded;
