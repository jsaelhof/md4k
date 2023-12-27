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
  const { fiveStarRating, __typename, ...movieInput } = movie;

  return {
    variables: {
      movie: movieInput,
      list: list.id,
    },
    optimisticResponse: {
      editMovie: {
        ...movie,
        __typename: "Movie",
      },
    },
  };
};
