import React, { useEffect, useState } from "react";
import axios from "axios";
import Header1 from "../components/Header1Component";
import Sidebar from "../components/SidebarComonent";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [generalCourses, setGeneralCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [showGeneralCourses, setShowGeneralCourses] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    // Fetch general courses
    axios
      .get("https://unitest.onrender.com/api/general")
      .then((response) => {
        console.log("General Courses:", response.data);
        setGeneralCourses(response.data);
      })
      .catch((error) => console.error("Error fetching general courses:", error.response?.data || error.message));

    // Fetch all courses
    axios
      .get("https://unitest.onrender.com/api/course/all")
      .then((response) => {
        console.log("All Courses:", response.data);
        setAllCourses(response.data);
      })
      .catch((error) => console.error("Error fetching all courses:", error.response?.data || error.message));
  }, []);

  return (
    <div className="homepage1">
      <Header1 />
      <div className="homepage">
        <Sidebar />
        <div className="content">
          <h2 className="page-header">Welcome to the Homepage</h2>

          <div className="collapsible-boxes">
            <div className="collapsible-box">
              <div
                className="collapsible-header"
                onClick={() => setShowGeneralCourses(!showGeneralCourses)}
              >
                <h3>General Courses</h3>
              </div>
              {showGeneralCourses && (
                <div className="collapsible-content">
                  <ul>
                  {generalCourses.map((course, index) => (
                  <li key={course._id}>
                    <Link to={`/course/${course._id}`} className="linkc">{course.courseName}: {course.description}</Link>
                  </li>
                ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="collapsible-box">
              <div
                className="collapsible-header"
                onClick={() => setShowAllCourses(!showAllCourses)}
              >
                <h3>All Courses</h3>
              </div>
              {showAllCourses && (
                <div className="collapsible-content">
                  <ul>
                  {allCourses.map((course, index) => (
                  <li key={course._id}>
                    <Link to={`/course/${course._id}`} className="linkc">{course.courseName}: {course.description}</Link>
                  </li>
                ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

