import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

export const DBConnect = async () => {
  try {
    if (!DB_URL) {
      console.error("DB_URL is not initialized.");
      return;
    }

    await mongoose.connect(DB_URL);
    console.log("DB connected successfully.");
  } catch (error) {
    console.error("Error while connecting to DB", error);
  }
};
