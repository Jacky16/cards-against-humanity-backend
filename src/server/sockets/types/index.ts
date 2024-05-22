import { Socket } from "socket.io";

export interface ServerToClientEvents {
  createLobby: (payload: PayloadCreateLobby) => void;
}

export interface ClientToServerEvents {}

export type SocketI = Socket<ServerToClientEvents, ClientToServerEvents>;
