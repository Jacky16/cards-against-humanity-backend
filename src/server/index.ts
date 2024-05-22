import express from "express";
import { createServer } from "node:http";

const app = express();

export const serverHttp = createServer(app);

const startServer = async (port = 4000) => {
  serverHttp.listen(port, () => {
    console.log(`🚀 Server ready at port ${port}`);
  });

  return { app, server: serverHttp };
};

export default startServer;
