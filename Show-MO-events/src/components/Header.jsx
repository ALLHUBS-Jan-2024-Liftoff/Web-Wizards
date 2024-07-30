// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asserts/ShowMO.png'; // Replace 'your-logo.png' with your actual image file name

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px', // Adjust the padding to reduce upper space
    backgroundColor: '#f5f5dc', // Adjust the background color as needed
  };

  const navStyle = {
    display: 'flex',
    gap: '10px'
  };

  const imgStyle = {
    width: '60px', // Increase the width
    height: '60px', // Increase the height
    marginRight: '10px',
    borderRadius: '50%', // Make the image round
    objectFit: 'full' // Ensure the image covers the container
  };

  const titleStyle = {
    margin: '0',
    fontSize: '1.5em' // Reduce the font size
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="ShowMOEvents Logo" style={imgStyle} />
        <h1 style={titleStyle}>ShowMOEvents</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/home">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
