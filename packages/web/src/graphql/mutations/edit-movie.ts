import {
  BaseMutationOptions,
  MutationTuple,
  gql,
  useMutation,
} from "@apollo/client";
import {
  EditMovieMutation,
  EditMovieMutationVariables,
  Movie,
} from "../../__generated__/graphql";
import { GetListsItem } from "../types";

export const EDIT_MOVIE = gql`
  mutation EditMovie(
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

type EditMovieMutationOptions = BaseMutationOptions<
  EditMovieMutation,
  EditMovieMutationVariables
>;

export const useEditMovie = ({
  onCompleted,
  onError,
}: {
  onCompleted?: EditMovieMutationOptions["onCompleted"];
  onError?: EditMovieMutationOptions["onError"];
} = {}): MutationTuple<EditMovieMutation, EditMovieMutationVariables> =>
  useMutation<EditMovieMutation, EditMovieMutationVariables>(EDIT_MOVIE, {
    onCompleted,
    onError,
  });

export const editMovieOptions = (
  movie: Movie,
  list: GetListsItem
): EditMovieMutationOptions => {
  // Omit using spread.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fiveStarRating, ...movieInput } = movie;

  return {
    variables: {
      movie: movieInput,
      list: list.id,
    },
    // The optimistic response must include all the fields that will be returned by the server.
    // The server returns all the movie data from the MongoDB so if the `movie` argument to this function
    // has fewer fields in it (as is the case for a watched movie whose date we might be editing),
    // We need to include nulls or some other data for each field the server will return that we don't
    // have in the input movie object. I've added all the fields missing when editing a watched movie here
    // but it might require that all the fields are initialized to at least null to handle any possible case.
    optimisticResponse: {
      editMovie: {
        runtime: null,
        source: null,
        genre: null,
        year: null,
        locked: null,
        addedOn: null,
        ratings: null,
        ...movie,
        __typename: "Movie",
      },
    },
  };
};
