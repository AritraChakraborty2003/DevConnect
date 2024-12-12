import mongoose from "mongoose";
import { getConnectionString } from "../Utils/getConnectionString.js";
export const dbConnect = async ({ DB_USER, DB_PASSWORD }) => {
  // Connect to MongoDB using the provided credentials
  const url = getConnectionString({ DB_USER, DB_PASSWORD });
  try {
    const conn = await mongoose.connect(url);
    if (conn) {
      console.log(`MongoDB Connected`);
    } else {
      throw new Error("Couldn't connect to MongoDB");
    }
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
  }
};
