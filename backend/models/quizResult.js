const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseName: { type: String, required: true },
  questionType: { type: String, required: true }, // "Mixed Questions" or "Specific Topic Questions"
  topicName: { type: String, default: null }, // Null if not a specific topic
  attemptNumber: { type: Number, default: 1 },
  dateTaken: { type: Date, default: Date.now },
  totalQuestions: { type: Number, required: true },
  answeredQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  unansweredQuestions: { type: Number, required: true },
  questionDetails: [
    {
      questionText: { type: String, required: true },
      selectedOption: { type: String, required: false },
      correctOption: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

module.exports = mongoose.model("QuizResult", quizResultSchema);
