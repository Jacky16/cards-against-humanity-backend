import { ApolloServer } from "@apollo/server";
import resolvers from "./resolvers/index.js";
import typeDefs from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
