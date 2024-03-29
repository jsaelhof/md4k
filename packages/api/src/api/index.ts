import { ApolloServer, type ExpressContext } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  AuthenticationError,
} from "apollo-server-core";
import { type Db, MongoClient } from "mongodb";
import http from "http";
import express from "express";
import cors from "cors";
import { resolvers } from "../graphql/resolvers/index.js";
import dotenv from "dotenv";
import { isTokenValid } from "../auth/validate.js";
import { OMDBDataSource } from "../graphql/datasources/omdb-datasource.js";
import { TMDBDataSource } from "../graphql/datasources/tmdb-datasource.js";
import { readFileSync } from "fs";
import { join } from "path";

// Note: this uses a path relative to the project's root directory.
// On Vercel, this is the monorepo root so the path must start with "/packages/api".
// In Dev, this is the api package root and must omit that prefix.
const typeDefs = readFileSync(
  join(
    process.cwd(),
    process.env.SCHEMA_PATH ?? "packages/api/src/graphql/schemas/schema.graphql"
  ),
  {
    encoding: "utf-8",
  }
);

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
