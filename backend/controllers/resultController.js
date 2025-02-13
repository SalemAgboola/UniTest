const QuizResult = require('../models/quizResult'); // Import the model
const mongoose = require("mongoose");

// Save quiz result
const saveQuizResult = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const {
      userId,
      courseName,
      questionType,
      topicName,
      totalQuestions,
      answeredQuestions,
      correctAnswers,
      wrongAnswers,
      unansweredQuestions,
      questionDetails,
    } = req.body;

    // Check if the user has taken the quiz before
    const previousAttempts = await QuizResult.find({
      userId,
      courseName,
      questionType,
      topicName,
    });

    // Set attempt number
    const attemptNumber = previousAttempts.length + 1;

    // Save the quiz result
    const newResult = new QuizResult({
      userId,
      courseName,
      questionType,
      topicName,
      attemptNumber,
      totalQuestions,
      answeredQuestions,
      correctAnswers,
      wrongAnswers,
      unansweredQuestions,
      questionDetails,
    });
    const validationError = newResult.validateSync(); // Validate manually
    if (validationError) {
      console.error("Validation error:", validationError.message);
      return res.status(400).json({ error: validationError.message }); // Return 400 for validation errors
    }
    console.log("New QuizResult instance created:", newResult);
    console.log("Saving result with dateTaken:", newResult.dateTaken);

    await newResult.save();
    console.log("Quiz result saved successfully!");
    res.status(200).json({ message: "Result saved successfully!" });
  } catch (error) {
    console.error("Error saving quiz result:", error.message);
    res.status(500).json({ error: error.message }); // Return error details to the frontend
  };
};


// Fetch quiz results for a user
const fetchQuizResults = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all quiz results for the user
    const results = await QuizResult.find({ userId });

    if (!results || results.length === 0) {
      return res.status(404).json({ message: 'No quiz results found.' });
    }
    console.log("Fetched results with dateTaken:", results);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching quiz results.' });
  }
};

module.exports = {
  saveQuizResult,
  fetchQuizResults,
};
