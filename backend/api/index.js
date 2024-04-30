import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = 3000;

import cors from "cors";
app.use(cors());

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

import { connectDB } from "../src/db.js";
await connectDB();

app.use("/", (req, res) => {
  res.json({ "Hello, World!": "Welcome to FoodieCrew" });
});

import createUserRoute from "../src/routes/createUser.js";
import foodDataRoute from "../src/routes/displayData.js";
app.use("/api", createUserRoute);
app.use("/api", foodDataRoute);

app.listen(PORT, () => {
  console.log(`Live at http://localhost:${PORT}`);
});

export default app;