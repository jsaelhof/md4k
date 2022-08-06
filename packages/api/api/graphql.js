import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "./_schema";

export default new ApolloServer({
  typeDefs,
  resolvers,
}).createHandler({
  path: "/api/graphql",
});
