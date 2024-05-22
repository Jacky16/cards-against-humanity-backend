import { Server } from "socket.io";
import { serverHttp } from "../index.js";
import { ClientToServerEvents, ServerToClientEvents } from "./types/index.js";

const io = new Server<ClientToServerEvents, ServerToClientEvents>(serverHttp, {
  cors: {
    origin: "*",
  },
});

export default io;
