import {
  type BaseMutationOptions,
  type MutationTuple,
  gql,
  useMutation,
} from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

import { GET_MOVIES } from "../queries";
import {
  type AddMovieMutation,
  type AddMovieMutationVariables,
  type MovieInput,
} from "../../__generated__/graphql";
import { type GetListsItem, type NewMovieInput } from "../types";

export const ADD_MOVIE = gql`
  mutation AddMovie($movie: MovieInput!, $list: String!) {
    addMovie(movie: $movie, list: $list) {
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
      fiveStarRating
      background
    }
  }
`;

type AddMovieMutationOptions = BaseMutationOptions<
  AddMovieMutation,
  AddMovieMutationVariables
>;

export const useAddMovie = ({
  onCompleted,
  onError,
}: {
  onCompleted: AddMovieMutationOptions["onCompleted"];
  onError: AddMovieMutationOptions["onError"];
}): MutationTuple<AddMovieMutation, AddMovieMutationVariables> => {
  const [addMovieMutation, status] = useMutation<
    AddMovieMutation,
    AddMovieMutationVariables
  >(ADD_MOVIE, {
    onCompleted,
    onError,
    update(cache, { data }) {
      data?.addMovie &&
        cache.updateQuery(
          {
            query: GET_MOVIES,
            variables: { list: data.addMovie.list },
          },
          ({ movies, watchedMovies }) => ({
            movies: [...movies, data.addMovie],
            watchedMovies,
          })
        );
    },
  });
  return [addMovieMutation, status];
};

export const addMovieOptions = (
  movie: NewMovieInput,
  list: GetListsItem
): AddMovieMutationOptions => {
  const id = uuidv4();
  const ratingsId = uuidv4();

  const movieWithId: MovieInput = {
    id,
    list: list.id,
    ...movie,
    ratings: {
      ...movie.ratings,
      id: ratingsId,
    },
  };

  return {
    variables: { movie: movieWithId, list: list.id },
    optimisticResponse: {
      addMovie: {
        addedOn: new Date().toISOString(), // This is actually set on the server
        watchedOn: null,
        poster: null,
        background: null,
        imdbID: null,
        runtime: null,
        year: null,
        fiveStarRating: null,
        ratings: {
          id: ratingsId,
          IMDB: null,
          ROTTEN_TOMATOES: null,
          METACRITIC: null,
          ...movieWithId.ratings,
        },
        ...movieWithId,
      },
    },
  };
};
