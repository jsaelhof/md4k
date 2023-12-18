import { gql, useMutation } from "@apollo/client";
import omit from "lodash/omit";
import { omitTypename } from "../../utils/omit-typename";
import { GET_WATCHED_MOVIES } from "../queries/get-watched-movies";

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
      cache.modify({
        id: "ROOT_QUERY",
        fields: {
          movies: (cachedMovies = [], { toReference }) => [
            ...cachedMovies,
            // I'm doing this directly because if I try to use updateQuery or modify the root query's movies array by inserting the "editMovie"
            // object, that object will be missing the fiveStarRating. That field is returned by the server and we don't know it here
            // because we don't send it to the server in the first place.
            // The toReference helper identifies the item using its id and typename and builds the reference we need to insert into the movies array.
            // It's further down on this page but it's all explained here:
            // https://github.com/appmotion/apollo-augmented-hooks/blob/HEAD/CACHING.md#how-do-i-add-something-to-the-cache
            toReference(editMovie),
          ],
        },
      });

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
