// LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css'; // Import the LandingPage CSS file

function LandingPage() {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Skills Heaven!</h1>
        <p>Your message here...</p>
      </header>
      <section>
        <h2>About Us</h2>
        <p>About content goes here...</p>
      </section>
      <section>
        <h2>Services</h2>
        <p>Services content goes here...</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>Contact information goes here...</p>
      </section>
    </div>
  );
}

export default LandingPage;
