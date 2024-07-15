import React from 'react';
import Header from './components/Navbar';
import './css/Navbar.css';
import './css/LoginForm.css';
import LoginForm from './components/LoginForm';
import Slideshow from './components/SlideShow';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content-container">
        <div className="login-form-container">
          <h2>Login</h2>
          <LoginForm />
        </div>

        <div className="slideshow-container">
          <h2>Check Out Our Slideshow</h2>
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default App;
