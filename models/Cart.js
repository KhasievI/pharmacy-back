import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  cart: [
    {
      pharmacy: { type: String, required: true },
      img: String,
      medId: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
      count: Number,
      price: Number,
    },
  ],
  customer: [
    {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      houseNumber: { type: String, required: true },
      comment: String,
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
