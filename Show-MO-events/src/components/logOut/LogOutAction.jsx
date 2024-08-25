import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Perform logout by sending a request to the backend
      const response = await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Ensure cookies are sent
      });

      if (response.ok) {
        // Clear any client-side tokens or session data
        localStorage.removeItem('username');

        // Show a success message
        setLogoutMessage('Good job, you did it!');

        // Redirect to the root path after a short delay to show the message
        setTimeout(() => {
          setLogoutMessage(''); // Clear the message
          navigate('/'); // Redirect to the Login
        }, 2000); // 2-second delay
      } else {
        // Handle any errors from the backend
        setLogoutMessage('Failed to log out. Please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error during logout:', error);
      setLogoutMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {/* Logout link */}
      <a href="#" onClick={handleLogout} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
        Logout
      </a>

      {/* Show the logout message if it exists */}
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default Logout;
