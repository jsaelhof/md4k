import { lists, movies, searchByTitle, watchedMovies } from "./query/index.js";
import {
  addList,
  addMovie,
  editMovie,
  removeMovie,
  updateMovie,
} from "./mutation/index.js";
import { fiveStarRating } from "./five-star-rating/index.js";
import {
  thirdPartyBackdrop,
  thirdPartyBackdrops,
  thirdPartyMovie,
  thirdPartyPlot,
  thirdPartyProvider,
  thirdPartyTrailer,
} from "./third-party-movie/index.js";

export const resolvers = {
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
    trailer: thirdPartyTrailer,
    plot: thirdPartyPlot,
    source: thirdPartyProvider,
    fiveStarRating,
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
