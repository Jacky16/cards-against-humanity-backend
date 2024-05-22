import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import apolloServer from "./server/graphql/graphql-server.js";
import startServer from "./server/index.js";
import { createLobby } from "./server/sockets/handlers/lobby/lobby-handlers.js";
import io from "./server/sockets/index.js";
import { SocketI } from "./server/sockets/types/index.js";

const port = Number(process.env.PORT || 4000);

const { app } = await startServer(port);

await apolloServer.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(apolloServer)
);

const onConnection = (socket: SocketI) => {
  console.log("New connection", socket.id);

  socket.on("createLobby", createLobby);
};

io.on("connection", onConnection);
