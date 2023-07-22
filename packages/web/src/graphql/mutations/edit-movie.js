import { gql, useMutation } from "@apollo/client";
import omit from "lodash/omit";
import { omitTypename } from "../../utils/omit-typename";

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

export const useEditMovie = ({ onCompleted, onError } = {}) => {
  const [editMovie, status] = useMutation(EDIT_MOVIE, { onCompleted, onError });
  return [editMovie, status];
};

export const editMovieOptions = (movie, list) => {
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
