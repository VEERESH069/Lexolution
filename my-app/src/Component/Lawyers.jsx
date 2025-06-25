import React, { useState } from 'react';
import '../Styles/Lawyer.css'; // Make sure to include your styles

const LawyerServices = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lawyer Services</title>

      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
        <a href="/">Home</a>
          <a href="/Service">Our Services</a>
          <a href="/Sig">SignUp</a>
          <a href="/LawPage">About Us</a>
        </nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
      </header>

      <div id="sidebar" className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <a href="#">Our Top Lawyers</a>
        <a href="#">Legal Services</a>
        <a href="#">Case Studies</a>
        <a href="#">Client Testimonials</a>
        <a href="#">Contact</a>
      </div>

      <section className="main-banner lawyer-banner">
        <h1>Expert Legal Services</h1>
        <p>Reliable and Trustworthy Lawyers at Your Service</p>
      </section>
      <div className="robot-container">
        
        <div className="robot">
        <a className="1" href="/ai" style={{justifyItems:"center"}}>C</a>
        </div>
        
      </div>

      <section className="lawyer-content">
        <div className="lawyer-card card1">
          <h3>Register</h3>
        </div>
        <div className="lawyer-card card2">
          <h3>Hire</h3>
        </div>
        <footer className="footer">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2025 Lexolution. All Rights Reserved.</p>
      </footer>
      </section>
    </>
  );
};

export default LawyerServices;
