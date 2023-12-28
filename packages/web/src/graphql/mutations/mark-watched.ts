import { BaseMutationOptions, gql, useMutation } from "@apollo/client";
import { GET_MOVIES } from "../queries";
import { GET_WATCHED_MOVIES } from "../queries/get-watched-movies";
import {
  List,
  MarkWatchedMutation,
  MarkWatchedMutationVariables,
  Movie,
} from "../../__generated__/graphql";

export const MARK_WATCHED = gql`
  mutation MarkWatched($movie: MovieInput!, $list: String!) {
    editMovie(movie: $movie, list: $list) {
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

type MarkWatchedMutationOptions = BaseMutationOptions<
  MarkWatchedMutation,
  MarkWatchedMutationVariables
>;

export const useMarkWatched = ({
  onCompleted,
}: {
  onCompleted: MarkWatchedMutationOptions["onCompleted"];
}) => {
  const [markWatchedMutation, status] = useMutation<
    MarkWatchedMutation,
    MarkWatchedMutationVariables
  >(MARK_WATCHED, {
    onCompleted,
    update(cache, { data }) {
      data?.editMovie &&
        cache.updateQuery(
          {
            query: GET_MOVIES,
            variables: { list: data.editMovie.list },
          },
          (cacheData) =>
            cacheData?.movies && {
              movies: cacheData.movies.filter(
                (movie: Movie) => movie?.id !== data.editMovie?.id
              ),
            }
        );
      data?.editMovie &&
        cache.updateQuery(
          {
            query: GET_WATCHED_MOVIES,
            variables: { list: data.editMovie.list },
          },

          // Only update the cache for watched movies if its been called at least once before.
          // It will return null for the cache read response if it has not been called.
          (cacheData) => {
            if (cacheData?.watchedMovies) {
              return {
                watchedMovies: [...cacheData.watchedMovies, data.editMovie],
              };
            }
          }
        );
    },
  });
  return [markWatchedMutation, status];
};

export const markWatchedOptions = (
  movie: Movie,
  watchedOn: string,
  list: List
): MarkWatchedMutationOptions => {
  // Omit using spread.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fiveStarRating, ...movieInput } = movie;

  return {
    variables: {
      movie: {
        ...movieInput,
        watchedOn,
      },
      list: list.id,
    },
    optimisticResponse: {
      editMovie: {
        ...movie,
        watchedOn,
        __typename: "Movie",
      },
    },
  };
};
