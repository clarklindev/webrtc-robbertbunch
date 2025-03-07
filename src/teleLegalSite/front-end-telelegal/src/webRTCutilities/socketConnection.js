import { io } from "socket.io-client";

const socketConnection = (jwt) => {
  let socket;

  //check to see if socket is already connected, 
  if (socket && socket.connected) {
    //if so, just return it...
    return socket;
  }

  //otherwise its not connected, connect!
  socket = io.connect("https://localhost:9000", {
    auth: {
      jwt,
    },
  });
  return socket;
};
export default socketConnection;
