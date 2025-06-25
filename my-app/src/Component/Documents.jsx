import React from 'react';
import '../Styles/Doc.css'; // Import your CSS file

const Documents = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Our Services</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />

      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
        <a href="/">Home</a>
          <a href="/Service">Our Services</a>
          <a href="/Sig">SignUp</a>
          <a href="/LawPage">About Us</a>
        </nav>
      </header>

   
      <section className="main-banner">
        <h1>Our Legal Services</h1>
        <p>
          We provide expert documentation and legal solutions tailored to your
          needs.
        </p>
      </section>
      <div className="robot-container">
        
        <div className="robot">
        <a className="1" href="/ai" style={{justifyItems:"center"}}>C</a>
        </div>
        
      </div>
    
      <section className="services-section">
        <div className="service-card2 cardA">
          <h3>
            <a href="/Bond">Bond Agreements</a>
          </h3>
        </div>
        <div className="service-card2 cardB">
          <h3>
            <a href="d.html">Contract Drafting</a>
          </h3>
        </div>
        <div className="service-card2 cardOMG">
          <h3>
            <a href="/Bui">Business Operations</a>
          </h3>
        </div>
        <div className="service-card2 cardD">
          <h3>
            <a href="cr.html">Copyright Protection</a>
          </h3>
        </div>
        <div className="service-card2 cardE">
          <h3>
            <a href="/T">Tax Advisory</a>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Documents;
