import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "./images/logo2.png";
import "./Header1Component.css";

const Header1 = () => {
  const [userData, setUserData] = useState({
    username: "",
    department: "",
  });
  const [breadcrumbs, setBreadcrumbs] = useState([{ label: "Home", path: "/" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseName, setCourseName] = useState(""); // Store the course name for the breadcrumb

  const location = useLocation();

  useEffect(() => {
    // Fetch user data for the header
    axios
      .get("https://unitest.onrender.com/api/user/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Token from local storage
        },
      })
      .then((response) => {
        const { username, department } = response.data;
        setUserData({ username, department });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.response?.data || error.message);
        setError("Failed to load user data.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const newBreadcrumbs = [{ label: "Home", path: "/home" }];

    if (pathParts.includes("course")) {
      const courseId = pathParts[pathParts.indexOf("course") + 1];
      
      // Fetch the course name if not already loaded
      axios
        .get(`https://unitest.onrender.com/api/course/${courseId}`)
        .then((response) => {
          setCourseName(response.data.courseName); // Update course name
          newBreadcrumbs.push({
            label: `Course Page: ${response.data.courseName}`,
            path: `/course/${courseId}`,
          });
          setBreadcrumbs(newBreadcrumbs);
        })
        .catch((error) => {
          console.error("Error fetching course name:", error.message);
          setBreadcrumbs(newBreadcrumbs); // Keep it simple if course name fetch fails
        });
    } else {
      setBreadcrumbs(newBreadcrumbs);
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <header className="Header1">
      <h1 className="site-name">UniTest</h1>
      <div className="logo-section">
        <div className="profile-details">
          <p className="user-info">
            Welcome, <span className="userdata1">{userData.username}</span>
          </p>
          <p className="user-info">
            Department Of <span className="userdata">{userData.department}</span>
          </p>
          <div className="breadcrumbs">
            {breadcrumbs.map((breadcrumb, index) => (
              <span key={index}>
                <Link to={breadcrumb.path} className="breadcrumb-link">
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && " > "}
              </span>
            ))}
          </div>
        </div>
        <img src={logo} alt="Site Logo" className="site-logo" />
      </div>
    </header>
  );
};

export default Header1;
