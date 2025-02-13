const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendEmail } = require("../utils/emailService");

// Register User
const register = async (req, res) => {
  const { username, email, password, department } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, department });
    await newUser.save();

    // Generate email verification token
    const token = jwt.sign(
      { email: newUser.email }, // Payload with email
      process.env.JWT_SECRET,  // Secret key
      { expiresIn: "1h" }      // Token expiration (1 hour)
    );

    // Send verification email using emailService
    await sendEmail(newUser.email, "Email Verification", token);

    res.status(201).json({ message: "User registered successfully. Please verify your email." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error registering user." });
  }
};

// Login User
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Include userId in the response along with the token
    res.json({
      message: "Login successful",
      token,
      userId: user._id // Add userId here
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Verify Email
const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    // Mark the user as verified (assuming you have a "verified" field in your User model)
    if (user.verified) {
      return res.status(400).json({ message: "Email is already verified." });
    }

    user.verified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(400).json({ message: "Invalid or expired token." });
  }
};

// Send Reset Code
const sendResetCode = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const resetCode = Math.floor(100 + Math.random() * 900).toString(); // Generate a 3-digit reset code
    user.resetCode = resetCode;
    await user.save();

    await sendEmail(email, "Password Reset Code", `Your reset code is: ${resetCode}`);
    res.json({ message: "Reset code sent to email" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Change Password
const changePassword = async (req, res) => {
  const { email, code, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.resetCode !== code) {
      return res.status(400).json({ message: "Invalid reset code" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetCode = null; // Clear reset code
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { register, login, verifyEmail, sendResetCode, changePassword };
