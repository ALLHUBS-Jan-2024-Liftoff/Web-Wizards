import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout-related tasks here, such as clearing session data or tokens
    localStorage.removeItem('token');

    // Show a success message
    setLogoutMessage('Good Job you did it!');

    // Redirect to the root path after a short delay to show the message
    setTimeout(() => {
      setLogoutMessage(''); // Clear the message
      navigate('/'); // Redirect to the Login
    }, 2000); // 2-second delay
  };

  return (
    <div>
      {/* Logout Link */}
      <h1> Are you sure you want to Proceed? < /h1>
      <button onClick={handleLogout}>Logout</button>

      {/* Show the logout message if it exists */}
      {logoutMessage && <p>{logoutMessage}</p>}
    </div>
  );
};

export default Logout;
