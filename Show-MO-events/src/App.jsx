import React from 'react';
import Header from './components/Navbar'; // Adjust the import path as per your project structure
import './css/Navbar.css'; // Make sure to adjust the CSS import if needed
import './css/LoginForm.css'; // Make sure the path is correct
import LoginForm from './components/LoginForm'; // Corrected import

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>Login Here!</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
