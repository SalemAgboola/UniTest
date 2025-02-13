// backend/models/Question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  topic: { type: String }, // Optional: If the question belongs to a specific topic
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }], // List of answer options
  correctAnswer: { type: String, required: true }, // Correct answer
});

module.exports = mongoose.model("Question", questionSchema);
