import filter from "lodash/filter";
import conforms from "lodash/conforms";
import { isBefore, parseISO, subDays } from "date-fns";

export const filterMovies = (movies, filterOptions = {}) => {
  const filters = {
    locked: (locked) => !locked,
  };

  if (filterOptions.minRuntime || filterOptions.maxRuntime) {
    filters.runtime = (runtime) =>
      runtime >= (filterOptions.minRuntime || 0) &&
      runtime <= (filterOptions.maxRuntime || Infinity);
  }

  // maxAdded is an integer of days (ex: 30)
  // Find only movies that were added no more than N days ago
  if (filterOptions.maxAdded) {
    filters.addedOn = (addedOn) =>
      !isBefore(parseISO(addedOn), subDays(new Date(), filterOptions.maxAdded));
  }

  // minAded is an integer of days (ex: 30)
  // Find only movies that were added at least N days ago
  if (filterOptions.minAdded) {
    filters.addedOn = (addedOn) =>
      isBefore(parseISO(addedOn), subDays(new Date(), filterOptions.minAdded));
  }

  return filter(movies, conforms(filters));
};
