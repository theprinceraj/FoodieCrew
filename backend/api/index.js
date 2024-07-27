import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(express.json());

import { connectDB } from "../src/db.js";
await connectDB();

import createUserRoute from "../src/routes/createUser.js";
import foodDataRoute from "../src/routes/displayData.js";
import orderDataRoute from "../src/routes/orderData.js";
app.use("/api", createUserRoute);
app.use("/api", foodDataRoute);
app.use("/api", orderDataRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../dist")));
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Live at http://localhost:${PORT}`);
});

export default app;
