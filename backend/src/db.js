import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const mongoURI = process.env.MONGO_DB_URI;

export async function connectDB() {
  await mongoose.connect(mongoURI);
  console.log("MongoDB Connected.");
  let fetched_data = mongoose.connection.db.collection("food_items").find({});
  global.food_items = await fetched_data.toArray();
  // console.log(global.food_items);
  fetched_data = mongoose.connection.db.collection("foodCategory").find({});
  global.foodCategory = await fetched_data.toArray();
  // console.log(global.foodCategory);
}
