import express from "express";
const router = express.Router();
import { Order } from "../models/Order.js";

router.post("/updateOrderData", async (req, res) => {
  let data = req.body;
  await data.order_data.splice(0, 0, { order_date: data.order_date });

  let eId = await Order.findOne({ email: data.email });
  if (eId === null) {
    await Order.create({
      email: data.email,
      order_data: [data.order_data],
    }).then(() => {
      res.status(200).json({
        message: "Order saved successfully",
        success: true,
      });
    });
  } else {
    await Order.findOneAndUpdate(
      { email: data.email },
      {
        $push: {
          order_data: data.order_data,
        },
      }
    ).then(() => {
      res.status(200).json({
        message: "Order saved successfully",
        success: true,
      });
    });
  }
});

export default router;
