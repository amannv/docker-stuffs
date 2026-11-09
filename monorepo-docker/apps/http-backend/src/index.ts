import "dotenv/config";
import express from "express";
import prisma from "@repo/database/prisma";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.status(201).json({
    message: "User created successfully",
    User: user,
  });
});

app.listen(3000, () => [console.log("Server is running on port 3000.")]);
