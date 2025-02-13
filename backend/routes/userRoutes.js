// backend/routes/userRoutes.js
const express = require("express");
const { getUserProfileForHeader, getUserProfileForPage, getUserHistory, saveQuizResult } = require("../controllers/userController");
const { authenticateJWT } = require("../utils/authMiddleware"); // JWT Authentication Middleware
const router = express.Router();

// Protected Routes
router.get("/user", authenticateJWT, getUserProfileForHeader); // For header: only username and department
router.get("/full-profile", authenticateJWT, getUserProfileForPage); // For profile page: all user data
router.get("/history", authenticateJWT, getUserHistory); // Get user history
router.post("/save-result", authenticateJWT, saveQuizResult); // Save quiz result

module.exports = router;
