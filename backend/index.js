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

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

import apiRoute from "./routes/createUser.js";
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Live at http://localhost:${PORT}`);
});