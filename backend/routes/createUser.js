import express from "express";
const router = express.Router();

import { User } from "../models/User.js";

router.post("/createUser", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

export default router;
