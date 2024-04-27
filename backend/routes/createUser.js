import { User } from "../models/User.js";
import { body, validationResult } from "express-validator";

import express from "express";
const router = express.Router();

router.post(
  "/createUser",
  body("email", "Invalid email address provided.").isEmail(),
  body("name", "Name should be at least 5 characters long.").isLength({
    min: 5,
  }),
  body("password", "Password should be at least 5 characters long.").isLength({
    min: 5,
  }),
  async (req, res) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }

      const { name, email, password, location } = req.body;

      await User.create({
        name: name,
        password: password,
        email: email,
        location: location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginUser",
  body("email", "Invalid email address provided.").isEmail(),
  body("password", "Password should be at least 5 characters long.").isLength({
    min: 5,
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({
        email: email,
        password: password,
      });
      if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }

      res.json({ userData: user, success: true });
    } catch (error) {}
  }
);

export default router;
