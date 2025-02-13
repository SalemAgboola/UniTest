import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfilePage.css";
import Header1 from "../components/Header1Component";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "Cannot display user password", // Placeholder
    department: "",
  });

  useEffect(() => {
    axios
      .get("https://unitest.onrender.com/api/user/full-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is stored
        },
      })
      .then((response) => {
        const { username, email, department } = response.data;
        setUserData((prevState) => ({
          ...prevState,
          username,
          email,
          department,
        }));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.response?.data || error.message);
      });
  }, []);

  return (
    <div>
        <Header1 />
    <div className="profile-page">
      <h2 className="profile-header">Profile Card</h2>
      <div className="profile-card">
        <div className="profile-item">
          <strong>Username:</strong> {userData.username}
        </div>
        <div className="profile-item">
          <strong>Email:</strong> {userData.email}
        </div>
        <div className="profile-item">
          <strong>Password:</strong> {userData.password}
        </div>
        <div className="profile-item">
          <strong>Department:</strong> {userData.department}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
