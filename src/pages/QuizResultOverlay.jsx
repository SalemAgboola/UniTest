import React, { useState } from "react";
import "./QuizResultOverlay.css"; // Link to the generated CSS file
import { useNavigate } from "react-router-dom";

const QuizResultOverlay = ({ result, courseName, topicName, total, answered, unanswered, correct, incorrect }) => {
  const questionsPerPage = 10; // Number of questions per page
  const totalPages = Math.ceil(result.questionDetails.length / questionsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  // Get questions for the current page
  const currentQuestions = result.questionDetails.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  const handleDone = () => {
    navigate('/home'); // Redirect to homepage
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="overlay">
      <div className="overlay-content">

        {/* Header */}
        <div className="header">
          <h2>Quiz Results</h2>
          <p>
            {courseName}-{topicName}
          </p>
          <div className="details">
            <div>
            <span>Total Questions: {result.total || total}     </span>
            <span>Answered: {result.answered || answered}         </span>
            </div>
            <div>
            <span>Unanswered: {result.unanswered || unanswered}        </span>
            <span>Correct: {result.correct || correct}       </span>
            </div>
            <div>
            <span>Incorrect: {result.incorrect || incorrect}    </span>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="questions">
          {currentQuestions.map((q, index) => (
            <div className="question-container" key={index}>
              <h5>Q{(currentPage - 1) * questionsPerPage + index + 1}: {q.questionText || "Question text not available"}</h5>
              <p>Your Answer: {q.selectedOption || "Not answered"}</p>
              <p>Correct Answer: {q.correctOption || "Not available"}</p>
              <p>{q.isCorrect ? "Correct" : "Incorrect"}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="navigation">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="button">
            Back
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="button">
            Next
          </button>
        </div>

        {/* Done Button */}
        <button className="done-button" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default QuizResultOverlay;
