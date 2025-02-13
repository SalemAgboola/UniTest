import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TextBox from '../components/TextboxComponent';
import Button from '../components/ButtonComponent';
import Header from '../components/HeaderComponent';
import './AuthPages.css'; // Import the CSS

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://unitest.onrender.com/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);  // Store the userId

    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("userId")); 
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
  <div>
    <Header />
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1>Log In To Your Account</h1>
        <form onSubmit={handleLogin} className="auth-form">
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
          <Button type="submit" text="Log In" />
          <div className="auth-links">
            <Link to="/register" className="auth-link">Register</Link>
            <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;

          