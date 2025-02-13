// backend/controllers/userController.js
const User = require("../models/User");

// backend/controllers/userController.js
const getUserProfileForHeader = async (req, res) => {
  try {
    console.log("Decoded User ID from Token:", req.user.id); // Debug log
    const user = await User.findById(req.user.id).select("username department");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("Fetched User Data:", user); // Debug log
    res.json({ username: user.username, department: user.department });
  } catch (error) {
    console.error("Error in getUserProfileForHeader:", error.message);
    res.status(500).json({ message: "Error fetching user profile for header" });
  }
};



// For the profile page (return all data, including email, password, etc.)
const getUserProfileForPage = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Fetch all user data
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send the full user document (username, department, email, password, etc.)
  } catch (error) {
    res.status(500).json({ message: "Error fetching full user profile" });
  }
};

// Add any additional controller methods for history, quiz results, etc.
const getUserHistory = async (req, res) => {
  // Assuming you have a history field in the user model, you can fetch it here
  try {
    const user = await User.findById(req.user.id); // Get user data
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.history); // Replace with actual field if you store history elsewhere
  } catch (error) {
    res.status(500).json({ message: "Error fetching user history" });
  }
};

const saveQuizResult = async (req, res) => {
  const { testName, totalQuestions, correctAnswers, wrongAnswers, unanswered } = req.body;
  const userId = req.user.id; // Get the userId from JWT token middleware

  try {
    // Find the user by ID to associate the quiz results with the user
    const user = await User.findById(userId); // Get user by ID

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new quiz result object
    const quizResult = {
      testName,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      unanswered,
      date: new Date(), // Store the date when the quiz was taken
    };

    // Assuming user model has a quizResults field where results are saved
    user.quizResults.push(quizResult); // Add quiz result to user's quizResults array

    // Save the updated user data with quiz result
    await user.save();

    res.status(201).json({ message: "Quiz result saved successfully." });
  } catch (error) {
    console.error("Error saving quiz result:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


module.exports = {
  getUserProfileForHeader, // Route for header
  getUserProfileForPage,   // Route for profile page
  getUserHistory,          // Assuming you want to keep this functionality
  saveQuizResult,          // Assuming you want to keep this functionality
};
