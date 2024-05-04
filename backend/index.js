import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

import { connectDB } from "./db.js";
await connectDB();

import createUserRoute from "./routes/createUser.js";
import foodDataRoute from "./routes/displayData.js";
app.use("/api", createUserRoute);
app.use("/api", foodDataRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Live at http://localhost:${PORT}`);
});
