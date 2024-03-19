// Header.js
import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Categories</li>
          <li>Community</li>
          <li>Job Seekers</li>
          <li>Employers</li>
        </ul>
        <button>Post a job</button>
      </nav>
      <div>Trusted by the world's leading companies</div>
      <div>
        <img src="google-logo.png" alt="Google" />
        <img src="amazon-logo.png" alt="Amazon" />
        {/* Add more company logos */}
      </div>
    </header>
  );
};

export default Header;