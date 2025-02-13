// Overlay.jsx
import React, { useState, useEffect } from "react";
import "./Overlay.css";

const Overlay = ({ title, timing, numberOfQuestions, onClose }) => {
  const [countdown, setCountdown] = useState(10); // Countdown from 10 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) clearInterval(timer); // Stop the timer when it reaches 0
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{title}</h2>
        <p><strong>Timing:</strong> {timing}</p>
        <p><strong>Questions:</strong> {numberOfQuestions}</p>
        <p><strong>Good Luck!</strong></p>
        <div className="countdown">
          <p>Your exam begins in: {countdown} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
