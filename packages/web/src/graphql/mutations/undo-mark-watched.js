import { gql, useMutation } from "@apollo/client";
import omit from "lodash/omit";
import { omitTypename } from "../../utils/omit-typename";
import { GET_MOVIES } from "../queries";
import { GET_WATCHED_MOVIES } from "../queries/get-watched-movies.js";

const GQL = gql`
  mutation UndoMarkWatched(
    $movie: MovieInput!
    $list: String!
    $removeKeys: [String]
  ) {
    editMovie(movie: $movie, list: $list, removeKeys: $removeKeys) {
      id
      title
      list
      runtime
      source
      genre
      year
      poster
      imdbID
      locked
      addedOn
      watchedOn
      ratings {
        id
        IMDB
        ROTTEN_TOMATOES
        METACRITIC
      }
      background
    }
  }
`;

export const useUndoMarkWatched = ({ onCompleted }) => {
  const [undoMarkWatchedMutation, status] = useMutation(GQL, {
    onCompleted,
    update(cache, { data: { editMovie } }) {
      cache.updateQuery(
        {
          query: GET_MOVIES,
          variables: { list: editMovie.list },
        },
        ({ movies }) => ({
          movies: [...movies, editMovie],
        })
      );

      cache.updateQuery(
        {
          query: GET_WATCHED_MOVIES,
          variables: { list: editMovie.list },
        },

        // Only update the cache for watched movies if its been called at least once before.
        // It will return null for the cache read response if it has not been called.
        (response) => {
          if (response?.watchedMovies) {
            return {
              watchedMovies: response.watchedMovies.filter(
                ({ id }) => id !== editMovie.id
              ),
            };
          }
        }
      );
    },
  });
  return [undoMarkWatchedMutation, status];
};

export const undoMarkWatchedOptions = (movie, list) => ({
  variables: {
    movie: omitTypename(omit(movie, "watchedOn")),
    list: list.id,
    removeKeys: ["watchedOn"],
  },
  optimisticResponse: {
    editMovie: {
      ...movie,
      watchedOn: null,
      __typename: "Movie",
    },
  },
});
