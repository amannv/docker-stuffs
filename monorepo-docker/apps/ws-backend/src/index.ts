import "dotenv/config";
import { WebSocketServer } from "ws";
import prisma from "@repo/database/prisma";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (socket) => {
  const User = await prisma.client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  const message = {
    User: User,
  };

  socket.send(JSON.stringify(message));
});
