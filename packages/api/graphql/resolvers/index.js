import {
  lists,
  movies,
  searchByTitle,
  omdbMovie,
  tmdbMovie,
  watchedMovies,
} from "./query/index.js";
import { tmdbMovieProvider } from "./query/index.js";
import {
  addList,
  addMovie,
  editMovie,
  removeMovie,
  updateMovie,
} from "./mutation/index.js";
import { fiveStarRating } from "./movie/index.js";

export const resolvers = {
  Query: {
    lists,
    movies,
    watchedMovies,
    searchByTitle,
    omdbMovie,
    tmdbMovie,
  },

  TmdbMovie: {
    provider: tmdbMovieProvider,
  },

  Movie: {
    fiveStarRating,
  },

  OmdbMovie: {
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
