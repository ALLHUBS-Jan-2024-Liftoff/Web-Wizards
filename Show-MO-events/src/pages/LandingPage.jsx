// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to ShowMOEvents</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default LandingPage;