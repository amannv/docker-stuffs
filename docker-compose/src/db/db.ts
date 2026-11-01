import mongoose, { mongo } from "mongoose";

const DBConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://amanverma-cmd:Aman%408789@cluster0.vu2sga4.mongodb.net/docker-compose",
    );
  } catch (error) {
    console.error("Error while connecting to DB", error);
  }
};
