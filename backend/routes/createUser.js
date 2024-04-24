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
  }
);

export default router;
