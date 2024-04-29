import express from "express";
const router = express.Router();

router.post("/foodData", async (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.log(error);
  }
});

export default router;
