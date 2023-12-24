import filter from "lodash/filter";
import conforms from "lodash/conforms";
import { isBefore, parseISO, subDays } from "date-fns";
import { Movie } from "../__generated__/graphql";

export const filterMovies = (
  movies: Movie[],
  filterOptions: {
    minRuntime?: number;
    maxRuntime?: number;
    maxAdded?: number;
    minAdded?: number;
  } = {}
) => {
  const filters: {
    [key: string]:
      | ((val: number) => boolean)
      | ((val: boolean) => boolean)
      | ((val: string) => boolean);
  } = {
    locked: (locked: boolean) => !locked,
  };

  if (filterOptions.minRuntime || filterOptions.maxRuntime) {
    filters.runtime = (runtime: number) =>
      runtime >= (filterOptions.minRuntime || 0) &&
      runtime <= (filterOptions.maxRuntime || Infinity);
  }

  // maxAdded is an integer of days (ex: 30)
  // Find only movies that were added no more than N days ago
  if (filterOptions.maxAdded) {
    filters.addedOn = (addedOn: string) =>
      filterOptions.maxAdded !== undefined
        ? !isBefore(
            parseISO(addedOn),
            subDays(new Date(), filterOptions.maxAdded)
          )
        : false;
  }

  // minAded is an integer of days (ex: 30)
  // Find only movies that were added at least N days ago
  if (filterOptions.minAdded) {
    filters.addedOn = (addedOn: string) =>
      filterOptions.minAdded !== undefined
        ? isBefore(
            parseISO(addedOn),
            subDays(new Date(), filterOptions.minAdded)
          )
        : false;
  }

  return filter(movies, conforms(filters));
};
