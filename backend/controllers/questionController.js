const Question = require("../models/Question"); // Make sure this path is correct
const Course = require("../models/Course"); // For additional course validation if needed

// Function to shuffle an array (Fisher-Yates Algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Fetch all questions for a specific course
exports.getQuestionsByCourse = async (req, res) => {
  const { courseId } = req.params; // Get courseId from the request URL
  try {
    const questions = await Question.find({ courseId }).lean();
    if (!questions.length) {
      return res.status(404).json({ message: "No questions found for this course." });
    }

    // Shuffle options for each question
    const formattedQuestions = questions.map((question) => ({
      ...question,
      options: shuffleArray([...question.options]), // Shuffling options
    }));

    res.status(200).json({ questions: formattedQuestions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching questions." });
  }
};

// Fetch all questions for a specific topic within a course
exports.getQuestionsByTopic = async (req, res) => {
  const { courseId, topic } = req.params; // Get courseId and topic from the request URL
  try {
    const questions = await Question.find({ courseId, topic }).lean();
    if (!questions.length) {
      return res.status(404).json({ message: `No questions found for the topic: ${topic}.` });
    }

    // Shuffle options for each question
    const formattedQuestions = questions.map((question) => ({
      ...question,
      options: shuffleArray([...question.options]), // Shuffling options
    }));

    res.status(200).json({ questions: formattedQuestions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching topic questions." });
  }
};

// Fetch mixed questions for a specific course
exports.getMixedQuestionsByCourse = async (req, res) => {
  const { courseId } = req.params; // Get courseId from the request URL
  try {
    const mixedQuestions = await Question.find({ courseId, topic: null }).lean(); // Null topic = mixed questions
    if (!mixedQuestions.length) {
      return res.status(404).json({ message: "No mixed questions found for this course." });
    }

    // Shuffle options for each question
    const formattedQuestions = mixedQuestions.map((question) => ({
      ...question,
      options: shuffleArray([...question.options]), // Shuffling options
    }));

    res.status(200).json({ mixedQuestions: formattedQuestions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching mixed questions." });
  }
};

exports.getTopicsByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    // Fetch distinct topic names for the course
    const topics = await Question.distinct("topic", { courseId });
    if (!topics.length) {
      return res.status(404).json({ message: "No topics found for this course." });
    }
    res.status(200).json({ topics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching topics." });
  }
};
