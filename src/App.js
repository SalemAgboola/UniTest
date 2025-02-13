import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';
import CoursePage from "./pages/CoursePage";
import QuizPage from "./pages/QuizPage";
import ProfilePage from './pages/ProfilePage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/course/:courseId/topic/:topic" element={<QuizPage />} />
        <Route path="/course/:courseId/mixed-questions" element={<QuizPage />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/history' element={<HistoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
