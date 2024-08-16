import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import PasswordResetForm from '../components/passwordReset/PasswordResetForm'; // Adjust the path if needed

const ResetPasswordPage = () => {
  return (
    <div className="reset-password-page">
      <h2>Reset Your Password</h2>
      <p>Please enter your details to reset your password.</p>

      {/* Render the PasswordResetForm component */}
      <PasswordResetForm />

      {/* Link to Login Page */}
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default ResetPasswordPage;
