// backend/utils/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ message: "Authentication failed" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded); // Check the decoded JWT content

    // Instead of `req.user = decoded;`, assign `userId` (as that's what is in the token)
    req.user = { id: decoded.userId }; // Use `userId` from decoded token
    console.log("Decoded User ID from Token:", req.user.id); // Verify the user ID
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = { authenticateJWT };
