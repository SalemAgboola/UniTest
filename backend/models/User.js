const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  quizResults: [{ type: mongoose.Schema.Types.ObjectId, ref: "QuizResult" }],
  resetCode: { type: String, default: null },
  verified: { type: Boolean, default: false }, // New field for email verification
});
module.exports = mongoose.model('User', userSchema);