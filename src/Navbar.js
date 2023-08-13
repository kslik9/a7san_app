// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from './skills-heaven-logo.png'; // Import the logo image

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav>
      <ul className="left-section">
        <li>
          <a href="/myaccount">My Account</a>
        </li>
      </ul>
      <ul className="logo-section">
        <li>
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for your next skill"
          value={searchQuery}
          onChange={handleSearch}
        />
        {<button className="search-button">Go</button>}
      </div>
    </nav>
  );
}

export default Navbar;
