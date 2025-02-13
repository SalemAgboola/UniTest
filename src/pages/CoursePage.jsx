import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header1 from "../components/Header1Component";
import Sidebar from "../components/SidebarComonent";
import "./CoursePage.css";

const CoursePage = () => {
  const { courseId } = useParams(); // Get the courseId from the URL
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  // State for collapsible boxes
  const [isMixedQuestionsOpen, setIsMixedQuestionsOpen] = useState(false);
  const [isSpecificTopicsOpen, setIsSpecificTopicsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://unitest.onrender.com/api/course/${courseId}`)
      .then((response) => {
        setCourse(response.data);
        setError(null); // Clear any previous error
      })
      .catch((err) => {
        console.error("Error fetching course details:", err.message);
        setError("Failed to load course details. Please try again later.");
      });
  }, [courseId]);

  return (
    <div className="course-page-container">
      <Header1 />
      <div className="course-content">
        <Sidebar />
        <div className="main-content">
          {error ? (
            <div className="error">{error}</div>
          ) : course ? (
            <>
              <h1>{course.courseName}</h1>
              <p>{course.description}</p>

              <div className="collapsible-boxes">
                {/* Mixed Questions Collapsible Box */}
                <div className="collapsible-box">
                  <div className="MixedBox">
  <Link to={`/course/${courseId}/mixed-questions`} className="collapsible-headerlinkc">
    <h3>Mixed Questions</h3>
  </Link>
  </div>
</div>

                {/* Specific Topics Collapsible Box */}
                <div className="collapsible-box">
                  <div
                    className="collapsible-header"
                    onClick={() => setIsSpecificTopicsOpen(!isSpecificTopicsOpen)}
                  >
                    <h3>Specific Topics</h3>
                    <span>{isSpecificTopicsOpen ? "▲" : "▼"}</span>
                  </div>
                  {isSpecificTopicsOpen && (
                    <div className="collapsible-content">
                      <ul>
                        {course.topics.map((topic, index) => (
                          <li key={index}>
                            <Link to={`/course/${courseId}/topic/${topic}`} className="linkc">
                              {topic}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div>Loading course details...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
