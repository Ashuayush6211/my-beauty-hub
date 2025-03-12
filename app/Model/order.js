const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: String,
  amount: Number,
  paymentMethod: String, // "Cash" or "Online"
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
