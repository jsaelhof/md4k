import { gql, useQuery } from "@apollo/client";

export const GET_THIRD_PARTY_MOVIE_FULL_DETAILS = gql`
  query GetThirdPartyMovieFullDetails($imdbID: ID!) {
    thirdPartyMovie(imdbID: $imdbID) {
      imdbID
      title
      rated
      actors
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
    }
  }
`;

export const useGetThirdPartyFullDetails = (movie) => {
  const { data, ...rest } = useQuery(GET_THIRD_PARTY_MOVIE_FULL_DETAILS, {
    skip: !movie.imdbID,
    errorPolicy: "all",
    variables: {
      imdbID: movie.imdbID,
    },
  });

  return {
    data: { ...data?.thirdPartyMovie },
    ...rest,
  };
};
