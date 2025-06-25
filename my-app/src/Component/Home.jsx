// import React from "react";
// import "../Styles/Home.css";

// const lexo = () => {
  
//   const handleSOSClick = () => {
//     alert("Emergency assistance requested! A representative will contact you shortly.");
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="logo">Lexolution</div>
//         <nav className="nav">
//           <a href="/Service">Our services</a>
//           <a href="/LawPage">About Us</a>
//           <a href="/ai">Comrade</a>
//           <a href="/Sig">SignUp</a>
//         </nav>
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </div>
//         <div className="contact-info">
//           <span>(780) 429-2300</span>
//           <span>lexlot.com</span>
//         </div>
//       </header>
//       <main className="main-banner1">
//       <h2>Advocating And Documenting For Clients Since 2025</h2>
//         <p>
//         . We provide quick and reliable assistance with documentation, 
//             such as patents and bonds, saving you time from lengthy court procedures. 
//             Additionally, we help you find the right lawyer for your needs, all within seconds.serving clients throughout India
//         </p>
//         <div className="buttons">
//           <button className="consultation-btn">GET A CONSULTATION</button>
//         </div>
//         <div className="buttons">
//         <button className="reviews-btn" onClick={handleSOSClick}>SOS</button>
//         </div>
//       </main>
      
//       <div className="robot-container">
//         <div className="robot"></div>
//       </div>
//       <div className="statistics">
//           <div className="stat">
//             <span>190+</span>
//             <p>Cases</p>
//           </div>
//           <div className="stat">
//             <span>30,000+</span>
//             <p>Hours of Experience</p>
//           </div>
//           <div className="stat">
//             <span>250+</span>
//             <p>Successful Cases</p>
//           </div>
//         </div>
//       <footer className="footer" style={{backgroundColor:"white"}}>
//         <div className="google-review " style={{backgroundColor:"white"}}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztGREBxlF-dRM-QjtCkvj4nSfBqQnHnOj0Q&s"
//             width="200px"
//             alt="Google Review Badge"
//           />
          
//           <h3><span>4.8</span></h3>
//          <h3> <a href="#reviews" style={{color:"black"}}>Read our 278 reviews </a></h3>
//         </div>
//         <div className="google-reviews-cards" style={{backgroundColor:"white"}}>
//           {["Great service, highly recommended!", "Very professional and knowledgeable team.", "I had a great experience working with them.", "Excellent customer service, will return for sure!", "Top-notch legal expertise, highly satisfied.", "The team really goes above and beyond for their clients."].map((review, index) => (
//             <div key={index} className="review-card">
//               <img
//                 src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico"
//                 alt="Google"
//                 className="google-icon"
//               />
//               <p>{review}</p>
//               <span>- Reviewer {index + 1}</span>
//             </div>
//           ))}
//         </div>
//         <div className="consultation-section">
//           <div className="consultation-bg">
//             <form className="consultation-form">
//               <h3>Get Your Free Consultation</h3>
//               <div className="form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Your Name" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" placeholder="Your Email" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message:</label>
//                 <textarea id="message" name="message" placeholder="Your Message" required />
//               </div>
//               <button type="submit" className="submit-btn">Submit</button>
//             </form>
//           </div>
//         </div>
//         <footer className="footer">
//         <div className="social-icons">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//         <p>&copy; 2025 Lexolution. All Rights Reserved.</p>
//       </footer>

//       </footer>
//     </>
//   );
// };

// export default lexo;
import React, { useState, useEffect } from "react";
import "../Styles/Home.css"; 
 import { CiSearch } from "react-icons/ci";
import documentsData from '../Component/documentData.json';  

const Lexo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]); 

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

  
    const filteredResults = [];
    documentsData.documentsData.forEach(category => {
      category.documents.forEach(doc => {
        if (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchTerm.toLowerCase())) {
          filteredResults.push({
            category: category.category,
            name: doc.name,
            description: doc.description
          });
        }
      });
    });

    setResults(filteredResults);
  }, [searchTerm]);

  const handleSOSClick = () => {
    alert("Emergency assistance requested! A representative will contact you shortly.");
  };

  return (
    <>
      <header className="header">
        <div className="logo">Lexolution</div>
        <nav className="nav">
          <a href="/Service">Our services</a>
          <a href="/LawPage">About Us</a>
          <a href="/ai">Comrade</a>
          <a href="/Sig">SignUp</a>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{width:"63%" , height:"80%"}} />
          <button onClick={() => setSearchTerm(searchTerm)} aria-label="Search" style={{height:"40%"}}>
            <CiSearch />
          </button>
        </div>
        <div className="contact-info">
          <span>(780) 429-2300</span>
          <span>lexlot.com</span>
        </div>
      </header>
      <main className="main-banner1">
        
        <h1>Advocating For Clients Since 2025</h1>
        <p>
        Lexolution is an Edmonton-based, multi-practice law firm  
            . We provide quick and reliable assistance with documentation, 
            such as patents and bonds, saving you time from lengthy court procedures. 
            Additionally, we help you find the right lawyer for your needs, all within seconds.serving clients throughout India
        </p>
        <div className="buttons">
       
          <button className="consultation-btn"><a href="/About" style={{color:"white"}}>GET A CONSULTATION</a> 
        
          </button>
          
        </div>
        <div className="buttons">
          <button className="reviews-btn" onClick={handleSOSClick}>SOS</button>
        </div>
      </main>

   
      <div className="search-results">
        <h2>Search Results:</h2>
        <div id="results">
          {results.length === 0 ? (
            <p> </p>
          ) : (
            results.map((result, index) => (
              <div key={index} className="result">
                <h3>{result.name} ({result.category})</h3>
                <p>{result.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="robot-container">
        
        <div className="robot">
        <a className="1" href="/ai" style={{justifyItems:"center"}}>C</a>
        </div>
        
      </div>

      <div className="statistics">
        <div className="stat">
          <span>190+</span>
          <p>Cases</p>
        </div>
        <div className="stat">
          <span>30,000+</span>
          <p>Hours of Experience</p>
        </div>
        <div className="stat">
          <span>250+</span>
          <p>Successful Cases</p>
        </div>
      </div>

      <footer className="footer" style={{ backgroundColor: "white" }}>
        <div className="google-review" style={{ backgroundColor: "white" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztGREBxlF-dRM-QjtCkvj4nSfBqQnHnOj0Q&s"
            width="200px"
            alt="Google Review Badge"
          />
          <h3><span>4.8</span></h3>
          <h3><a href="#reviews" style={{ color: "black" }}>Read our 278 reviews</a></h3>
        </div>
        <div className="google-reviews-cards" style={{ backgroundColor: "white" }}>
          {["Great service, highly recommended!", "Very professional and knowledgeable team.", "I had a great experience working with them.", "Excellent customer service, will return for sure!", "Top-notch legal expertise, highly satisfied.", "The team really goes above and beyond for their clients."].map((review, index) => (
            <div key={index} className="review-card">
              <img
                src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico"
                alt="Google"
                className="google-icon"
              />
              <p>{review}</p>
              <span>- Reviewer {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="consultation-section">
          <div className="consultation-bg">
            <form className="consultation-form">
              <h3>Get Your Free Consultation</h3>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
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
      </footer>
    </>
  );
};

export default Lexo;
