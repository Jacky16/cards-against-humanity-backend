import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import resolvers from "./resolvers/index.js";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer;
