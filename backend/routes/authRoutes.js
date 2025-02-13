// backend/routes/authRoutes.js
const express = require("express");
const jwt = require("jsonwebtoken"); // For generating tokens
const { register, login, changePassword, sendResetCode } = require("../controllers/authController");
const { sendEmail } = require("../utils/emailService");
const User = require("../models/User");

const router = express.Router();


// New route to handle email verification
const verifyEmail = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret
    req.user = decoded; // Add user data to the request object
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Add new routes to the router
router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/change-password", changePassword);
router.post("/send-reset-code", sendResetCode);

module.exports = router;

