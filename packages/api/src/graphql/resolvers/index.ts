import { lists, movies, searchByTitle, watchedMovies } from "./query/index.js";
import {
  addList,
  addMovie,
  editMovie,
  removeMovie,
  updateMovie,
} from "./mutation/index.js";
import { fiveStarRating } from "./movie/index.js";
import {
  thirdPartyBackdrop,
  thirdPartyBackdrops,
  thirdPartyCast,
  thirdPartyDirector,
  thirdPartyFiveStarRating,
  thirdPartyMovie,
  thirdPartyPlot,
  thirdPartyProvider,
  thirdPartyTrailer,
} from "./third-party-movie/index.js";
import { type Resolvers } from "../../__generated__/graphql.js";

export const resolvers: Resolvers = {
  Query: {
    lists,
    movies,
    watchedMovies,
    searchByTitle,
    thirdPartyMovie,
  },

  ThirdPartyMovie: {
    backdrop: thirdPartyBackdrop,
    backdrops: thirdPartyBackdrops,
    cast: thirdPartyCast,
    director: thirdPartyDirector,
    trailer: thirdPartyTrailer,
    plot: thirdPartyPlot,
    source: thirdPartyProvider,
    fiveStarRating: thirdPartyFiveStarRating,
  },

  Movie: {
    fiveStarRating,
  },

  Mutation: {
    addList,
    addMovie,
    editMovie,
    removeMovie,
    updateMovie,
  },
};
