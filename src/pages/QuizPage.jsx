import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import QuizResultsOverlay from "./QuizResultOverlay";
import "./QuizPage.css";

const QuizPage = () => {
  const { courseId, topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(topic ? 15 * 60 : 30 * 60);
  const [results, setResults] = useState(null);
  const [isConfirmationOverlayVisible, setIsConfirmationOverlayVisible] = useState(false);
  const [isTimeoutOverlayVisible, setIsTimeoutOverlayVisible] = useState(false);
  const [isResultOverlayVisible, setIsResultOverlayVisible] = useState(false);
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [topicName, setTopicName] = useState(""); // Default topic name


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const url = topic
          ? `https://unitest.onrender.com/api/course/${courseId}/topic/${encodeURIComponent(topic)}`
          : `https://unitest.onrender.com/api/${courseId}/mixed-questions`;
        const response = await axios.get(url);
        if (response.data.length === 0) setError("No questions available for this course or topic.");
        else {
          setQuestions(response.data);
          setError(null);
        }
      } catch (error) {
        setError("Failed to load questions. Please try again.");
      }
    };
    fetchQuestions();
  }, [courseId, topic]);

  useEffect(() => {
    if (results) {
      console.log("Results are updated. Now saving them...", results);
      saveResults(results); // Pass results directly to saveResults
    }
  }, [results]);
  // Watch for changes to `results`

  useEffect(() => {
    if (topic) {
      setTopicName(topic); // For specific topic quizzes, use the topic directly.
    } else {
      // For mixed quizzes, default to "Mixed Questions"
      setTopicName("Mixed Questions");
    };
  
    // Optional: Fetch available topics for the course (if needed elsewhere)
    const fetchTopics = async () => {
      try {
        const response = await axios.get(`https://unitest.onrender.com/api/questions/course/${courseId}/topics`);
        console.log("Fetched topics:", response.data);
      } catch (error) {
        console.error("Error fetching topics:", error.response?.data || error.message);
      }
    };
  
    fetchTopics();
  }, [courseId, topic]);
  
  

  useEffect(() => {
    const fetchCourseName = async () => {
      try {
        const response = await axios.get(`https://unitest.onrender.com/api/course/${courseId}`);
        setCourseName(response.data.courseName); // Assuming `name` is the field for the course name
      } catch (error) {
        console.error("Error fetching course name:", error.response?.data || error.message);
      }
    };
  
    if (courseId) {
      fetchCourseName();
    }
  }, [courseId]);
  

  useEffect(() => {
    if (timer === 0) {
      setIsTimeoutOverlayVisible(true);
      return;
    }
    const intervalId = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: selectedAnswer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };




  const handleJumpTo = (index) => setCurrentQuestionIndex(index);

  const calculateResults = () => {
    const totalQuestions = questions.length || 0;
    const answered = Object.keys(selectedAnswers).length || 0;
    const unanswered = totalQuestions - answered;
  
    let correct = 0, incorrect = 0;
  
    questions.forEach((q, idx) => {
      if (!selectedAnswers[idx]) {
        // Unanswered question counts as incorrect
        incorrect++;
      } else if (selectedAnswers[idx] === q.correctAnswer) {
        // Correct answer
        correct++;
      } else {
        // Answered but incorrect
        incorrect++;
      }
    });
  
    return {
      total: totalQuestions,
      answered,
      unanswered,
      correct,
      incorrect,
      questionDetails: questions.map((q, idx) => ({
        questionText: q.questionText || "Question text not available",
        selectedOption: selectedAnswers[idx] || "Not answered",
        correctOption: q.correctAnswer || "Correct answer not available",
        isCorrect: selectedAnswers[idx] === q.correctAnswer,
      })),
    };
  };
  
  const saveResults = async (results) => {
    if (!results || questions.length === 0 || !courseName) {
      console.error("Missing data to save results");
      return;
    }
  
    try {
      await axios.post("https://unitest.onrender.com/api/results/save", {
        userId: localStorage.getItem("userId"),
        courseName,
        questionType: topic ? "Specific" : "Mixed",
        topicName: topic || "Mixed Questions",
        totalQuestions: results.total,
        answeredQuestions: results.answered,
        correctAnswers: results.correct,
        wrongAnswers: results.incorrect,
        unansweredQuestions: results.unanswered,
        questionDetails: results.questionDetails,
      });
      console.log("Results saved successfully!", saveResults);
    } catch (error) {
      console.error("Error saving results:", error.response?.data || error.message);
    }
  };
  

  const handleSubmit = () => {
    const calculatedResults = calculateResults(); // Calculate the results
    setResults(calculatedResults); // Update the results state
    setIsConfirmationOverlayVisible(false); // Hide the confirmation overlay
    setIsResultOverlayVisible(true); // Show the result overlay
  };
  
  const handleTimeoutSubmit = () => {
    const calculatedResults = calculateResults(); // Calculate the results
    setResults(calculatedResults); // Update the results state
    setIsTimeoutOverlayVisible(false); // Hide the timeout overlay
    setIsResultOverlayVisible(true); // Show the result overlay
  };


  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>{topic ? `Topic: ${topic}` : "Mixed Questions"}</h1>
        <div className="timer">Time Remaining: {formatTime(timer)}</div>
      </div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : questions.length > 0 ? (
        <div className="quiz-container">
          <div className="question-box">
            <h2>Quiz Questions</h2>
            <h3>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].questionText}</h3>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, i) => (
                <div className="option" key={i}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={selectedAnswers[currentQuestionIndex] === option}
                      onChange={() => handleAnswerSelect(currentQuestionIndex, option)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
          </div>

          <div className="question-numbers">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`question-number ${
                  index === currentQuestionIndex
                    ? "current"
                    : selectedAnswers[index]
                    ? "answered"
                    : "unanswered"
                }`}
                onClick={() => handleJumpTo(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsConfirmationOverlayVisible(true)}
            className="submit-button516"
          >
            Submit
          </button>
        </div>
      ) : (
        <div>Loading questions...</div>
      )}

      {isConfirmationOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>Are you sure you want to submit?</h3>
            <p>You have answered {Object.keys(selectedAnswers).length} questions.</p>
            <button onClick={handleSubmit}>Confirm</button>
            <button onClick={() => setIsConfirmationOverlayVisible(false)}>Cancel</button>
          </div>
        </div>
      )}

      {isTimeoutOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h3>Time's up! Submit your exam now to save your results.</h3>
            <button onClick={handleTimeoutSubmit}>Submit</button>
          </div>
        </div>
      )}

{isResultOverlayVisible && results && (
  <QuizResultsOverlay
    result={results}
    courseName={courseName}
    topicName={topicName}
    onClose={() => setIsResultOverlayVisible(false)}
  />
)}

    </div>
  );
};

export default QuizPage;
