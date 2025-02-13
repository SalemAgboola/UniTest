const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Course
const courseSchema = new Schema({
  courseName: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['General', 'All'], required: true }, // Ensure this is present
  topics: [{ type: String }]  // List of topics for the course
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
