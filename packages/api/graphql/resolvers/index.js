import { lists, movies } from "./query/index.js";

export const resolvers = {
  Query: {
    lists,
    movies,
  },
};
