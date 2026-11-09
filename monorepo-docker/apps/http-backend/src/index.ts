import "dotenv/config";
import express from "express";
import prisma from "@repo/database/prisma";

const app = express();
app.use(express.json());

app.post("/create-user", async (req, res) => {
  const user = await prisma.client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.status(201).json({
    message: "User created successfully",
    User: user,
  });
});

app.listen(3001, () => [console.log("Server is running on port 3000.")]);
