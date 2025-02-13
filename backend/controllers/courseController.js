// backend/controllers/courseController.js

const Question = require("../models/Question"); // Ensure the Question model is imported

// Function to get mixed questions
const getMixedQuestions = async (req, res) => {
  const { courseId } = req.params; // Extract courseId from the URL parameters
  try {
    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required." });
    }

    const questions = await Question.find({ courseId });

    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this course." });
    }

    // Randomly shuffle and pick 50 questions
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 50);
    res.json(selectedQuestions);
  } catch (error) {
    console.error("Error fetching mixed questions:", error);
    res.status(500).json({ message: "Error fetching mixed questions", error: error.message });
  }
};

// Function to get topic-specific questions
const getTopicQuestions = async (req, res) => {
  const { courseId, topic } = req.params; // Get courseId and topic from request parameters
  try {
    if (!courseId || !topic) {
      return res.status(400).json({ message: "Course ID and topic are required." });
    }

    const questions = await Question.find({ courseId, topic });

    if (questions.length === 0) {
      return res.status(404).json({ message: `No questions found for topic "${topic}" in this course.` });
    }

    // Randomly shuffle and pick 25 questions
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 25);
    res.json(selectedQuestions);
  } catch (error) {
    console.error("Error fetching topic questions:", error);
    res.status(500).json({ message: "Error fetching topic questions", error: error.message });
  }
};

// Exporting the functions to be used in routes
module.exports = { getMixedQuestions, getTopicQuestions };