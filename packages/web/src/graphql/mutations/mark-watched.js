import { gql, useMutation } from "@apollo/client";
import omit from "lodash/omit";
import { omitTypename } from "../../utils/omit-typename";
import { GET_MOVIES } from "../queries";

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

export const useMarkWatched = ({ onCompleted }) => {
  const [markWatchedMutation, status] = useMutation(MARK_WATCHED, {
    onCompleted,
    update(cache, { data: { editMovie } }) {
      cache.updateQuery(
        {
          query: GET_MOVIES,
          variables: { list: editMovie.list },
        },
        ({ movies, watchedMovies }) => ({
          movies: movies.filter(({ id }) => id !== editMovie.id),
          watchedMovies: [...watchedMovies, editMovie],
        })
      );
    },
  });
  return [markWatchedMutation, status];
};

export const markWatchedOptions = (movie, watchedOn, list) => {
  const movieInput = omit(movie, ["fiveStarRating"]);
  return {
    variables: {
      movie: {
        ...omitTypename(movieInput),
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
