import { gql, useQuery } from "@apollo/client";
import noop from "lodash/noop";

const GET_THIRD_PARTY_MOVIE_SUMMARY_DETAILS = gql`
  query GetThirdPartyMovieSummaryDetails($imdbID: ID!) {
    thirdPartyMovie(imdbID: $imdbID) {
      imdbID
      title
      year
      runtime
      genre
      ratings {
        id
        IMDB
        ROTTEN_TOMATOES
        METACRITIC
      }
      poster
      source
    }
  }
`;

export const useGetThirdPartySummaryDetails = (
  movie,
  { onCompleted = noop } = {}
) => {
  const { data, ...rest } = useQuery(GET_THIRD_PARTY_MOVIE_SUMMARY_DETAILS, {
    skip: !movie || !movie?.imdbID,
    variables: { imdbID: movie?.imdbID },
    onCompleted: ({ thirdPartyMovie }) => {
      onCompleted(thirdPartyMovie);
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    ...data,
    ...rest,
  };
};
