import { ApolloServer, ExpressContext } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  AuthenticationError,
} from "apollo-server-core";
import { Db, MongoClient } from "mongodb";
import http from "http";
import express from "express";
import cors from "cors";
import { resolvers } from "../graphql/resolvers/index.js";
import dotenv from "dotenv";
import { isTokenValid } from "../auth/validate.js";
import { OMDBDataSource } from "../graphql/datasources/omdb-datasource.js";
import { TMDBDataSource } from "../graphql/datasources/tmdb-datasource.js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const a = readFileSync(
  resolve(process.cwd(), "src/graphql/schemas/schema.graphql"),
  {
    encoding: "utf-8",
  }
);
console.log(a);

console.log("TEST", process.cwd());

const typeDefs = `
# TODO: watched, addedOn and editedOn are date strings. Is there a better way to handle this in graph?
type List {
  id: ID!
  label: String!
  userId: String!
}

type Ratings {
  id: ID!
  IMDB: String
  ROTTEN_TOMATOES: String
  METACRITIC: String
}

input RatingsInput {
  id: ID!
  IMDB: String
  ROTTEN_TOMATOES: String
  METACRITIC: String
}

type Movie {
  id: ID!
  imdbID: String
  title: String!
  list: String!
  runtime: Int
  source: Int
  genre: Int
  year: String
  poster: String
  addedOn: String
  watchedOn: String
  locked: Boolean
  ratings: Ratings
  fiveStarRating: Float
  background: String
}

input MovieInput {
  id: ID!
  imdbID: String
  title: String!
  list: String!
  runtime: Int
  source: Int
  genre: Int
  year: String
  poster: String
  addedOn: String
  watchedOn: String
  locked: Boolean
  ratings: RatingsInput
  background: String
}

type DeletedMovie {
  id: ID!
  list: String!
}

type SearchResult {
  title: String
  year: String
  imdbID: String
  poster: String
}

type PageInfo {
  pages: Int
  page: Int
}

type SearchResults {
  results: [SearchResult]
  pageInfo: PageInfo
}

type ThirdPartyMovie {
  imdbID: ID!
  title: String
  year: String
  runtime: Int
  genre: Int
  rated: String
  cast: [ThirdPartyCastMember]
  director: [ThirdPartyDirector]
  ratings: Ratings
  fiveStarRating: Float
  poster: String
  backdrop: String
  backdrops: [String]
  trailer: ThirdPartyTrailer
  plot: String
  source: Int
}

type ThirdPartyTrailer {
  site: String
  key: ID!
}

type ThirdPartyCastMember {
  id: ID!
  name: String
  character: String
  image: String
}

type ThirdPartyDirector {
  id: ID!
  name: String
  image: String
}

type Query {
  lists: [List]
  movies(list: String!): [Movie]
  watchedMovies(list: String!): [Movie]
  searchByTitle(title: String!, year: String, page: Int): SearchResults
  thirdPartyMovie(imdbID: ID!): ThirdPartyMovie
}

type Mutation {
  addList(name: String!): List
  addMovie(movie: MovieInput!, list: String!): Movie
  editMovie(movie: MovieInput!, list: String!, removeKeys: [String]): Movie
  removeMovie(movieId: ID!, list: String!): DeletedMovie
  updateMovie(movieId: ID!, list: String!): Movie
}

`;

export interface GraphQLContext extends ExpressContext {
  db: Db;
  userId?: string;
  dataSources: {
    OMDB: OMDBDataSource;
    TMDB: TMDBDataSource;
  };
}

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

let db: Db;

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

const startApolloServer = async (
  app: ReturnType<typeof express>,
  httpServer: http.Server
) => {
  const server = new ApolloServer<GraphQLContext>({
    typeDefs,
    resolvers,
    dataSources: () => ({
      OMDB: new OMDBDataSource(),
      TMDB: new TMDBDataSource(),
    }),
    context: async ({ req }) => {
      // Connect to the the DB
      if (!db) {
        try {
          const dbClient = new MongoClient(MONGODB_URI);
          await dbClient.connect();
          db = dbClient.db(MONGODB_DB); // database name
        } catch (e) {
          console.log("error while connecting with graphql context (db)", e);
        }
      }

      // Get the Auth0 bearer token from the header
      const { authorization: token } = req.headers;

      if (!token)
        throw new AuthenticationError(
          "Unable to get a token from authorization header"
        );

      // Validate the token.
      // If valid, the decoded token is returned which contains the subject ("sub").
      // If invalid, error is returned.
      // Only one of invalid or decoded will be returned.
      const tokenResult = await isTokenValid(token);
      if ("error" in tokenResult)
        throw new AuthenticationError(tokenResult.error);

      return { db, userId: tokenResult.decoded.sub };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

export default httpServer;
