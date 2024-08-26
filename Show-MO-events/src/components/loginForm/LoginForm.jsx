import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import GoogleLogin from './GoogleLogin'; // Adjust the path if necessary
import './Login.css';

// use as a prop to then update the authenticated state when the user logs in //
// Also objects store information about the username and password, stores error messages //
const LoginForm = ({ setAuthenticated }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [loginErrors, setLoginErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate to allow for Dom navigation //

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Validate login form
  const validateLoginForm = () => {
    let valid = true;
    let errors = { username: '', password: '' };

    if (!loginData.username) {
      errors.username = 'Username is required';
      valid = false;
    }

    if (!loginData.password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setLoginErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (validateLoginForm()) {
      try {
        // Make POST request using Fetch API
        const response = await fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
          credentials: 'include', // Include credentials like cookies
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle HTTP errors based on status code
          if (response.status === 404) {
            setLoginErrors((prevErrors) => ({
              ...prevErrors,
              username: 'The given username does not exist',
            }));
          } else if (response.status === 401) {
            setLoginErrors((prevErrors) => ({
              ...prevErrors,
              password: 'Invalid password',
            }));
          } else {
            setLoginErrors((prevErrors) => ({
              ...prevErrors,
              general: 'Login failed. Please try again.',
            }));
          }
        } else {
          // Store username in local storage
          localStorage.setItem('username', loginData.username);
          // Set authenticated state
          setAuthenticated(true);
          // Navigate to home page
          navigate('/home');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setLoginErrors((prevErrors) => ({
          ...prevErrors,
          general: 'An error occurred. Please try again.',
        }));
      }
    }
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = () => {
    setAuthenticated(true);
    navigate('/home');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={loginData.username}
            onChange={handleChange}
          />
          {loginErrors.username && <p className="error">{loginErrors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={loginData.password}
            onChange={handleChange}
          />
          {loginErrors.password && <p className="error">{loginErrors.password}</p>}
        </div>
        {loginErrors.general && <p className="error">{loginErrors.general}</p>}
        <button type="submit" className="btn btn-primary">Login</button>

        {/* Google Login Button */}
        <div className="google-login">
          <p>Or login with:</p>
          <GoogleLogin onSuccess={handleGoogleLoginSuccess} />
        </div>

        {/* Forgot Password and Register Links */}
        <div className="form-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/register">Register Here?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
