import { gql, useQuery } from "@apollo/client";
import { GetListsItem } from "../types";
import { GetWatchedMoviesQuery, Maybe } from "../../__generated__/graphql";
import { notEmpty } from "../../utils/not-empty";

export const GET_WATCHED_MOVIES = gql`
  query GetWatchedMovies($list: String!) {
    watchedMovies(list: $list) {
      id
      title
      list
      poster
      imdbID
      watchedOn
      background
    }
  }
`;

export const useGetWatchedMovies = (list?: Maybe<GetListsItem>) => {
  const { data, ...rest } = useQuery<GetWatchedMoviesQuery>(
    GET_WATCHED_MOVIES,
    {
      skip: !list,
      variables: { list: list?.id },
      fetchPolicy: "cache-and-network",
    }
  );

  return {
    watchedMovies: data?.watchedMovies?.filter(notEmpty),
    ...rest,
  };
};
