import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { MongoClient } from "mongodb";
import http from "http";
import express from "express";
import cors from "cors";
import { typeDefs } from "../graphql/schemas";
import { resolvers } from "../graphql/resolvers";
import dotenv from "dotenv";

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

let db;

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: async ({ req, res }) => {
    //   if (!db) {
    //     try {
    //       const dbClient = new MongoClient(MONGODB_URI);
    //       await dbClient.connect();
    //       db = dbClient.db(MONGODB_DB); // database name
    //     } catch (e) {
    //       console.log("error while connecting with graphql context (db)", e);
    //     }
    //   }

    //   // FIXME: HOW TO DO THIS? getSession is Next.js code.
    //   // const {
    //   //   user: { sub: userId },
    //   //   idToken: token,
    //   // } = getSession(req, res);

    //   return { db, token, userId };
    // },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

export default httpServer;
