import React, { useState } from 'react';
import '../Styles/Signup.css'; 

export const LogInt = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", { name, email, password });
    };

    return (
        <div className="signup-page-wrapper">
            
            <header className="signup-site-header">
                <div className="signup-logo-section">
                    <h1 className="signup-brand-logo">Lexolution</h1>
                </div>
                <nav className="signup-navigation">
                <a href="/">Home</a>
          <a href="/Service">Our Services</a>
          <a href="/Sig">SignUp</a>
          <a href="/LawPage">About Us</a>
                </nav>
            </header>

          
            <section className="signup-main-banner">
                <h1 className="signup-banner-title">Log In </h1>
                <p className="signup-banner-subtext">Welcome back .</p>
            </section>
            <div className="robot-container">
        
        <div className="robot">
        <a className="1" href="/ai" style={{justifyItems:"center"}}>C</a>
        </div>
        
      </div>
            
            <div className="signup-form-wrapper">
                <div className="signup-form-box">
                    <h2 className="signup-form-header">Log In To Your Account</h2>
                    <form className="signup-form-elements" onSubmit={handleSubmit}>
                        <div className="signup-input-group">
                            <label className="signup-input-label">Full Name/UserName</label>
                            <input
                                type="text"
                                className="signup-input-field"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-input-group">
                            <label className="signup-input-label">Email Address</label>
                            <input
                                type="email"
                                className="signup-input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="signup-input-group signup-password-group">
                            <label className="signup-input-label">Password</label>
                            <input
                                type="password"
                                className="signup-input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                     

                        <button type="submit" className="signup-submit-btn">Register</button>

                        <p className="signup-toggle-form-link">
                            Dont Have An Account <a href="/Sig">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="signup-site-footer">
                <div className="signup-social-links">
                    <a href="https://facebook.com" className="signup-social-icon">🔵</a>
                    <a href="https://twitter.com" className="signup-social-icon">🐦</a>
                    <a href="https://instagram.com" className="signup-social-icon">📸</a>
                </div>
                <p>&copy; 2025 MyApp. All rights reserved.</p>
            </footer>
        </div>
    );
};
