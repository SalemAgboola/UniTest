import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizResultOverlay from "./QuizResultOverlay";
import Header1 from "../components/Header1Component";
import "./HistoryPage.css"; // Link to the CSS file

const HistoryPage = () => {
  const [quizResults, setQuizResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // Retrieve user ID from localStorage
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.error("No user ID found in localStorage. Please log in.");
      setLoading(false); // Stop loading if userId is missing
      return;
    }

    // Fetch quiz results
    const fetchResults = async () => {
      try {
        const response = await axios.get(`https://unitest.onrender.com/api/results/${userId}`);
        setQuizResults(response.data);
      } catch (error) {
        console.error("Error fetching quiz results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [userId]);


  const formatQuizName = (results) => {
    const { courseName, topicName, attemptNumber } = results;
    let name = `${courseName}`;
    if (topicName) {
      name += ` ${topicName}`;
    }
    if (attemptNumber > 1) {
      name += ` (${attemptNumber})`;
    }
    return name;
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div>
    <Header1 />
    <div className="history-page">
      <h1 className="history-title">Quiz History</h1>
      {quizResults.length === 0 ? (
        <p className="no-results">No quiz results found. Access yourself on the Quiz Page.</p>
      ) : (
        <ul className="quiz-list">
          {quizResults.map((results) => (
            <li
              key={results._id}
              className="quiz-item"
              onClick={() => setSelectedResult(results)}
            >
              <p className="quiz-name">{formatQuizName(results)}</p>
              <p className="quiz-date">
                {new Date(results.dateTaken).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Overlay for quiz result */}
      {selectedResult && (
        <QuizResultOverlay
          result={selectedResult}
          courseName={selectedResult.courseName}
          topicName={selectedResult.topicName}
          total={selectedResult.totalQuestions} 
          answered={selectedResult.answeredQuestions} 
          unanswered={selectedResult.unansweredQuestions} 
          correct={selectedResult.correctAnswers} 
          incorrect={selectedResult.wrongAnswers}
          onClose={() => setSelectedResult(null)}
        />
      )}
    </div>
    </div>
  );
};

export default HistoryPage;
