import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  cart: [{
    pharmacyName: {
      type: String,
      required: true,
    },
    med: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
    },
    count: Number,
    price: String,
  }]
});

export default mongoose.model("Cart", cartSchema);

