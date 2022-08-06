import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Movie {
    id: ID
    title: String
  }

  type Query {
    movie: [Movie]
  }
`;

export const resolvers = {
  Query: {
    movie: () => [
      {
        id: 0,
        title: "The Matrix",
      },
      {
        id: 1,
        title: "Batman",
      },
    ],
  },
};
