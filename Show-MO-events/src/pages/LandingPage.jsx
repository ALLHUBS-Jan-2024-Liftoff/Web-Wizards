import React from 'react';
import LoginForm from '../components/loginForm/LoginForm'; // Adjust the path as needed

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to ShowMOEvents</h2>

      {/* Render the LoginForm directly */}
      <LoginForm />
    </div>
  );
};

export default LandingPage;
