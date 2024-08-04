import React, { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [loginErrors, setLoginErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

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
          // Successful login
          console.log('Login successful:', data.message);

          // Clear the form or navigate if needed
          setLoginData({ username: '', password: '' });
          setLoginErrors({ username: '', password: '', general: '' });

          // Navigate to a different page if needed
                window.location.href = '/'
          // e.g., window.location.href = '/home';
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

  return (
    <form onSubmit={handleSubmit}>
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

    </form>
  );
};

export default LoginForm;
