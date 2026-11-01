import "dotenv/config";
import express from "express";
import { DBConnect } from "./db/db.js";
import { userModel } from "./models/userModel.js";

const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({
      users,
      message: "get endpoint",
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const user = await userModel.create({
      username: Math.random().toString(),
      password: Math.random().toString(),
    });

    res.status(201).json({
      user,
      message: "post endpoint",
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

async function startServer() {
  try {
    await DBConnect();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
}

startServer();