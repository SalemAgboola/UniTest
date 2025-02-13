const express = require("express");
const { getMixedQuestions, getTopicQuestions } = require("../controllers/courseController");
const Course = require("../models/Course");

const router = express.Router();

// Route for fetching mixed questions (50 random)
router.get("/:courseId/mixed-questions", getMixedQuestions);

// Route for fetching specific topic questions (25 random)
router.get("/:courseId/topic/:topic", (req, res, next) => {
  console.log("Route hit");
  console.log("Params:", req.params);
  next(); // Pass to the controller
}, getTopicQuestions);


// Route for fetching general courses (list of course names and descriptions)
router.get("/general", async (req, res) => {
  try {
    const generalCourses = await Course.find({ category: "General" }).select("_id courseName description"); // Include _id
res.json(generalCourses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching general courses" });
  }
});

// Route for fetching all courses (list of course names and descriptions)
router.get("/all", async (req, res) => {
    console.log("Fetching all courses...");
    try {
      const allCourses = await Course.find({ category: "All" }).select("_id courseName description"); // Include _id
      res.json(allCourses);      
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error fetching courses" });
    }
  });
  router.get("/:courseId", (req, res) => {
    const { courseId } = req.params;
  
    Course.findById(courseId)
      .then((course) => {
        if (!course) {
          return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
      })
      .catch((error) => res.status(500).json({ message: "Error fetching course", error }));
  });
  

module.exports = router;
