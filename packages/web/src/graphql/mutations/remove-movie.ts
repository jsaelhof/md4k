import {
  BaseMutationOptions,
  MutationTuple,
  gql,
  useMutation,
} from "@apollo/client";
import { GET_MOVIES, GET_WATCHED_MOVIES } from "../queries";
import {
  Movie,
  RemoveMovieMutation,
  RemoveMovieMutationVariables,
} from "../../__generated__/graphql";

export const REMOVE_MOVIE = gql`
  mutation RemoveMovie($movieId: ID!, $list: String!) {
    removeMovie(movieId: $movieId, list: $list) {
      id
      list
    }
  }
`;

type RemoveMovieMutationOptions = BaseMutationOptions<
  RemoveMovieMutation,
  RemoveMovieMutationVariables
>;

export const useRemoveMovie = (
  onError: RemoveMovieMutationOptions["onError"]
): MutationTuple<RemoveMovieMutation, RemoveMovieMutationVariables> => {
  const [removeMovie, status] = useMutation<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >(REMOVE_MOVIE, {
    update(cache, { data }) {
      data?.removeMovie &&
        cache.updateQuery(
          {
            query: GET_MOVIES,
            variables: { list: data.removeMovie.list },
          },
          (cacheData) => ({
            movies: cacheData.movies.filter(
              ({ id }: Movie) => id !== data.removeMovie?.id
            ),
          })
        );
    },
    onError,
  });

  return [removeMovie, status];
};

export const useRemoveWatchedMovie = ({
  onError,
}: {
  onError: RemoveMovieMutationOptions["onError"];
}) => {
  const [removeWatchedMovie, status] = useMutation<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >(REMOVE_MOVIE, {
    update(cache, { data }) {
      console.log("DATA", data);
      data?.removeMovie &&
        cache.updateQuery(
          {
            query: GET_WATCHED_MOVIES,
            variables: { list: data.removeMovie.list },
          },
          (cacheData) => ({
            watchedMovies: (cacheData.watchedMovies ?? []).filter(
              ({ id }: Movie) => id !== data.removeMovie?.id
            ),
          })
        );
    },
    onError: onError,
  });

  return [removeWatchedMovie, status];
};

export const removeMovieOptions = (
  id: string,
  list: string
): RemoveMovieMutationOptions => ({
  variables: {
    movieId: id,
    list,
  },
  optimisticResponse: {
    removeMovie: {
      id,
      list,
      __typename: "Movie",
    },
  },
});
