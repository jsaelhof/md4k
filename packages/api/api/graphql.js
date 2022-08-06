import { ApolloServer, makeExecutableSchema } from "apollo-server-micro";
import { typeDefs, resolvers } from "./_schema";

export default new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
}).createHandler({
  path: "/api/graphql",
});
