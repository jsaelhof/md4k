import { gql, useQuery } from "@apollo/client";

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
