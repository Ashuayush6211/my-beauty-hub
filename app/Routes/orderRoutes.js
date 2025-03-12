const express = require("express");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to check authentication
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

// Create Order
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { service, amount, paymentMethod } = req.body;
    const newOrder = new Order({ userId: req.user.id, service, amount, paymentMethod });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
});

// Fetch User Orders
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

module.exports = router;
