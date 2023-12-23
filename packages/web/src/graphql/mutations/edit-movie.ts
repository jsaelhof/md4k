import { BaseMutationOptions, gql, useMutation } from "@apollo/client";
import omit from "lodash/omit";
import { omitTypename } from "../../utils/omit-typename";
import {
  EditMovieMutation,
  EditMovieMutationVariables,
  List,
  MovieInput,
} from "../../__generated__/graphql";

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
} = {}) => {
  const [editMovie, status] = useMutation<
    EditMovieMutation,
    EditMovieMutationVariables
  >(EDIT_MOVIE, { onCompleted, onError });
  return [editMovie, status];
};

export const editMovieOptions = (
  movie: MovieInput,
  list: List
): EditMovieMutationOptions => {
  const movieInput = omit(movie, ["fiveStarRating"]);
  return {
    variables: {
      movie: omitTypename(movieInput),
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
