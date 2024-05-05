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

router.post("/fetchOrderData", async (req, res) => {
  try {
    let finalOrdersArray = [];
    let myData = (await Order.findOne({ email: req.body.email })).order_data;
    if (!myData) {
      return res.json({ order_data: [] });
    }
    myData?.forEach((element, index) => {
      finalOrdersArray[index] = {};
      finalOrdersArray[index].order_date = new Date(element[0].order_date);
      element.splice(0, 1);
      finalOrdersArray[index].items = [];
      element.forEach((subElem) => {
        finalOrdersArray[index].items.push(subElem);
      });
    });

    res.json({ order_data: finalOrdersArray });
  } catch (error) {
    console.log(error);
  }
});

export default router;
