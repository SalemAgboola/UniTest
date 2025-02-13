const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// Route to get all questions for a course
router.get("/course/:courseId", questionController.getQuestionsByCourse);

// Route to get all questions for a specific topic
router.get("/course/:courseId/topic/:topic", questionController.getQuestionsByTopic);

// Route to get mixed questions for a course
router.get("/course/:courseId/mixed", questionController.getMixedQuestionsByCourse);

router.get("/course/:courseId/topics", questionController.getTopicsByCourse);


module.exports = router;
