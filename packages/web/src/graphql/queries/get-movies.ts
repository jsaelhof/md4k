import { gql, useQuery } from "@apollo/client";
import { GetMovieItem, GetListsItem } from "../types";
import { GetMoviesQuery } from "../../__generated__/graphql";
import { notEmpty } from "../../utils/not-empty";

export const GET_MOVIES = gql`
  query GetMovies($list: String!) {
    movies(list: $list) {
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

export const useGetMovies = (
  list: GetListsItem | undefined | null
): { movies: GetMovieItem[]; moviesById: { [key: string]: GetMovieItem } } => {
  const { data, ...rest } = useQuery<GetMoviesQuery>(GET_MOVIES, {
    skip: !list,
    variables: { list: list?.id },
    fetchPolicy: "cache-and-network",
  });

  return {
    movies: (data?.movies ?? []).filter(notEmpty),
    moviesById: (data?.movies ?? []).reduce<{
      [key: string]: GetMovieItem;
    }>((acc, movie) => {
      if (movie) acc[movie.id] = movie;
      return acc;
    }, {}),
    ...rest,
  };
};
