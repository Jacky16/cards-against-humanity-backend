import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import server from "./server/apollo-server.js";

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server)
);
