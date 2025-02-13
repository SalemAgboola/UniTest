import React, { useState } from "react";
import axios from "axios";
import TextBox from '../components/TextboxComponent';
import Button from '../components/ButtonComponent';
import Header from '../components/HeaderComponent';
import './AuthPages.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Send Reset Code, Step 2: Reset Password
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle sending the reset code
  const handleSendResetCode = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://unitest.onrender.com/api/auth/send-reset-code", { email });
      setSuccessMessage(response.data.message);
      setStep(2); // Move to the next step
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to send reset code.");
    }
  };

  // Handle resetting the password
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://unitest.onrender.com/api/auth/change-password", {
        email,
        code: resetCode,
        newPassword,
      });
      setSuccessMessage(response.data.message);
      setStep(1); // Reset the form after success
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to reset password.");
    }
  };

  return (
    <div>
      <Header />
    <div className="auth-container">
      <div className="auth-form-wrapper1">
      {step === 1 && (
        <form onSubmit={handleSendResetCode}>
          <h1>Forgot Password</h1>
          <TextBox
            label="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <Button type="submit" text="Send Reset Code" />
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword}>
          <TextBox
            label="Reset Code"
            type="text"
            name="resetCode"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          />
          <TextBox
            label="New Password"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage} Kindly,go to the log in page to log in with your new password</p>}
          <Button type="submit" text="Reset Password"  />
        </form>
      )}
      </div>
    </div>
    </div>
  );
};

export default ForgotPasswordPage;
