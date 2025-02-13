// frontend/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TextBox from '../components/TextboxComponent';
import Button from '../components/ButtonComponent';
import Header from '../components/HeaderComponent';
import './AuthPages.css'; // Import the CSS

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !department) {
      setErrorMessage('All fields are required.');
      return;
    }
  
    console.log({ username, email, password, department });

    try {
      const response = await axios.post("https://unitest.onrender.com/api/auth/register", {
        username,
        email,
        password,
        department,
      });
      alert("Registration successful! Click ok to be redirected to the log in page."); // Show success message
      navigate("/"); // Redirect to the login page or home
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
    }
  }
    

  return (
    <div>
      <Header />
      <div className="auth-container">
        <div className="auth-form-wrapper">
          <h1>Create a New Account</h1>
          <form onSubmit={handleRegister} className="auth-form">
            <TextBox
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextBox
              label="Department"
              type="text"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <TextBox
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextBox
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p className="auth-error-message">{errorMessage}</p>}
            <Button type="submit" text="Register" />
            <div className="auth-links">
              <Link to="/" className="auth-link">Already have an account? Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
