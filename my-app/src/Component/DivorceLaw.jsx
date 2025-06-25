import React from "react";
import "../Styles/DivorceLaw.css"

const Dlawyers = [
  {
    Id: "lawyer001",
    name: "Bijoy Biswas",
    experience: "10+ years",
    cases: 150,
    location: "Bengal , India",
    image: "https://i.pinimg.com/474x/07/b8/f8/07b8f8645c0a29934001c00be80380c6.jpg",
  },
  {
    Id: "lawyer002",
    name: "Jane Smith",
    experience: "8+ years",
    cases: 120,
    location: "Los Angeles, USA",
    image: "https://i.pinimg.com/474x/e7/cf/72/e7cf7247554cf19fbdfc777bc869afb5.jpg",
  },
  {
    Id: "lawyer003",
    name: "Robert Brown",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/af/a4/d7/afa4d724404111dd604b950a65326d8a.jpg",
  },
  {
    Id: "lawyer004",
    name: "Qala Shen",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/7b/d8/58/7bd8589c51456f555e2cbb5bcb2d5fc3.jpg",
  },
  {
    Id: "lawyer005",
    name: "Shiela Rob",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/00/62/87/006287d3aa9c240f2ca4fdfe90d67a39.jpg",
  },
  {
    Id: "lawyer006",
    name: "Angelina Jacob",
    experience: "15+ years",
    cases: 200,
    location: "Chicago, USA",
    image: "https://i.pinimg.com/474x/be/6b/f9/be6bf903aeebd566fc3de8aad32943a0.jpg",
  },
  {
    Id: "lawyer007",
    name: "lakshmi Narayana",
    experience: "15+ years",
    cases: 200,
    location: "Karnataka , India ",
    image: "https://i.pinimg.com/474x/9a/b5/3e/9ab53ead723dddf9d4f0089f54f098c1.jpg",
  },
];

const Divorce = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Lexolution</h1>
        <nav>
            <h3>
            <a href="/">Home</a>
          <a href="/Service">Our Services</a>
          <a href="/Sig">SignUp</a>
          <a href="/LawPage">About Us</a>
          </h3>
        </nav>
        <div className="contact">
          <span>(780) 429-2300</span> | <span>lexilot.com</span>
        </div>
      </header>
      <div className="robot-container">
        
        <div className="robot">
        <a className="1" href="/ai" style={{justifyItems:"center"}}>C</a>
        </div>
        
      </div>

      <section className="hero4">
        <h2>Hire a Divorce Lawyer.</h2>
        <p>
        A divorce lawyer is like a navigator through stormy seas—helping
         clients untangle legal ties, divide assets, and find the best path forward. 
         Whether negotiating settlements or fighting in court, they bring strategy and
          compassion to one of life’s toughest transitions. 
        Think of them as the legal bridge from "I do" to "I’m free!"
        </p>
      </section>

      <section className="lawyers">
        {Dlawyers.map((lawyer, index) => (
          <div key={index} className="lawyer-card3">
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p className="one">Experience: {lawyer.experience}</p>
            <p className="two">Cases Solved: {lawyer.cases}</p>
            <p className="Three"> Location: {lawyer.location}</p>
            <button>Hire</button>
          </div>
        ))}
      </section>
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
    </div>
  );
};

export default Divorce;
