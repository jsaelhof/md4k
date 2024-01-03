import { gql, useQuery } from "@apollo/client";
import {
  GetThirdPartyMovieFullDetailsQuery,
  Maybe,
} from "../../__generated__/graphql";

export const GET_THIRD_PARTY_MOVIE_FULL_DETAILS = gql`
  query GetThirdPartyMovieFullDetails($imdbID: ID!) {
    thirdPartyMovie(imdbID: $imdbID) {
      imdbID
      title
      rated
      cast {
        id
        name
        character
        image
      }
      director {
        id
        name
        image
      }
      runtime
      ratings {
        id
        IMDB
        ROTTEN_TOMATOES
        METACRITIC
      }
      fiveStarRating
      backdrop
      backdrops
      trailer {
        site
        key
      }
      plot
      source
      genre
    }
  }
`;

export const useGetThirdPartyFullDetails = (imdbID?: Maybe<string>) => {
  const { data, ...rest } = useQuery<GetThirdPartyMovieFullDetailsQuery>(
    GET_THIRD_PARTY_MOVIE_FULL_DETAILS,
    {
      skip: !imdbID,
      errorPolicy: "all",
      variables: {
        imdbID: imdbID,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  return {
    data: { ...data?.thirdPartyMovie },
    ...rest,
  };
};
