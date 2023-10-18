import { gql, useQuery } from "@apollo/client";

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

export const useGetWatchedMovies = (list) => {
  const { data, ...rest } = useQuery(GET_WATCHED_MOVIES, {
    skip: !list,
    variables: { list: list?.id },
    fetchPolicy: "cache-and-network",
  });

  return {
    ...data,
    ...rest,
  };
};
