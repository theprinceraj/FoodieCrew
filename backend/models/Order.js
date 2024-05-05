import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
});

export const Order = mongoose.model("order", orderSchema);
