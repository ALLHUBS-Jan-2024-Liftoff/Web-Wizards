import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asserts/ShowMO.png';
import Logout from './logOut/LogOutAction'; // Import the Logout component

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 0.00px', // Further reduced padding to minimize space at the top
    backgroundColor: '#f5f5dc', // Light cream
    margin: '0', // Ensure no additional margin on the header
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const imgStyle = {
    width: '60px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const titleStyle = {
    margin: '0', // Remove any margin on the title to reduce space
    padding: '0', // Ensure no padding on the title
    fontSize: '1.5em',
    color: '#8b4513', // Light brown
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="ShowMOEvents Logo" style={imgStyle} />
        <h1 style={titleStyle}>ShowMOEvents</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <Link to="/create-post">Post</Link>
        <Link to="/event-manager">Event</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Connect</Link>
        <Logout /> {/* Logout button */}
      </nav>
    </header>
  );
};

export default Header;
