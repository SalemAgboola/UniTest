const express = require('express');
const router = express.Router();
const { saveQuizResult, fetchQuizResults} = require('../controllers/resultController');

// Route to save a quiz result
router.post('/save', saveQuizResult);

// Route to fetch quiz results for a user
router.get('/:userId', fetchQuizResults);

module.exports = router;


