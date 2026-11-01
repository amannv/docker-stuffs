import "dotenv/config";
import express from "express";
import { DBConnect } from "./db/db.js";
import { userModel } from "./models/userModel.js";

const app = express();
DBConnect();

app.get("/", (req, res) => {
  const users = userModel.find();

  res.status(200).json({
    users,
    message: "get endpoint",
  });
});

app.post("/create-user", async (req, res) => {
  const user = await userModel.create({
    username: Math.random().toString(),
    password: Math.random().toString(),
  });

  return res.status(201).json({
    user,
    message: "post endpoint",
  });
});

app.listen(3000, () => {
  console.log("Backend is running on posrt 3000");
});
