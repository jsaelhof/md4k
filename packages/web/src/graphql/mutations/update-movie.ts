import { gql, useMutation } from "@apollo/client";
import { isToday, isValid, parseISO } from "date-fns";
import { useEffect } from "react";
import {
  type Movie,
  type UpdateMovieMutation,
  type UpdateMovieMutationVariables,
} from "../../__generated__/graphql";

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($movieId: ID!, $list: String!) {
    updateMovie(movieId: $movieId, list: $list) {
      id
      source
      ratings {
        id
        IMDB
        ROTTEN_TOMATOES
        METACRITIC
      }
      fiveStarRating
    }
  }
`;

export const useUpdateMovie = (movie: Movie, focused: boolean) => {
  const [updateMovie, status] = useMutation<
    UpdateMovieMutation,
    UpdateMovieMutationVariables
  >(UPDATE_MOVIE);

  const lastUpdatedString = localStorage.getItem(`lastUpdated_${movie.id}`);
  const lastUpdated = lastUpdatedString ? parseISO(lastUpdatedString) : null;

  useEffect(() => {
    // A movie must have an imdbID to pull ratings.
    // I only want to update each movie once a day to keep from spamming the 3rd party API's.
    // If a movie has no local storage item (new, cleared storage), then the date is invalid.
    // If it's an invalid date, let it go through.
    if (
      movie.imdbID &&
      movie.list &&
      lastUpdated &&
      (!isToday(lastUpdated) || !isValid(lastUpdated)) &&
      focused
    ) {
      updateMovie({
        variables: {
          movieId: movie.id,
          list: movie.list,
        },
        optimisticResponse: {
          updateMovie: {
            ...movie,
            __typename: "Movie",
          },
        },
      });

      // Set this because we've sent a request.
      // Regardless of whether it ends up updating or not, we don't want to keep spamming
      // because the result is not going to change.
      localStorage.setItem(`lastUpdated_${movie.id}`, new Date().toISOString());
    }
  }, [focused, lastUpdated, movie, updateMovie]);

  return status;
};
