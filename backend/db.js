import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const mongoURI = process.env.MONGO_DB_URI;

export async function connectDB() {
  await mongoose.connect(mongoURI);
  console.log("MongoDB Connected.");
  const fetched_data = mongoose.connection.db.collection("food_items").find({});
  const res = await fetched_data.toArray();
  // console.log(res);
}
