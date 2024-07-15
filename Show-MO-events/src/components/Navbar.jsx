// Navbar.jsx
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
         <a href="/">
                  <img src="/src/assets/SPOILER_WebWizardTraining.png" alt="Logo" />
                </a>

      <ul className="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    </nav>
  );
};

export default Navbar;
