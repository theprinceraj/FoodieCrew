import express from "express";

const app = express();
const PORT = 5173;
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
