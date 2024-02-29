import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dark_Logo from '../../images/logo/silicon-logo-dark_theme.svg'

const DarkFooter = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=' + encodeURIComponent(email), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming the server sends a JSON response
        throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData.message}`);
      }

      setEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-branding">
          <img
            src={Dark_Logo}
            alt="Silicon Logo"
            className="footer-logo"
          />
          <p>
            Proin ipsum pharetra, senectus eget scelerisque varius pretium
            platea velit. Lacus, eget et vitae nullam proin turpis etiam mi
            sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
            elementum dolor ullamcorper sodales ultrices eros.
          </p>
          <div className="newsletter">
            <p className="newsletter-title">Subscribe to our newsletter</p>
            <form id="footer-newsletter-form" onSubmit={handleSubscribe} noValidate>
              <div className="newsletter-form">
                <div className="input-wrapper">
                  <i className="fa-regular fa-envelope email-icon"></i>
                  <input
                    type="email"
                    placeholder="Your Email"
                    aria-label="Email for newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button className="btn-theme" type="submit">Subscribe</button>
              </div>
            </form>
            {error && <div className="error-message">{error}</div>}
          </div>
          <p className="copyright">2024. All rights reserved. Silicon Template</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/error">Services</Link></li>
            <li><Link to="/error">Our Clients</Link></li>
            <li><Link to="/error">Testimonials</Link></li>
            <li><Link to="/news">News</Link></li>
            <br />
            <li><Link to="/error">Terms & Conditions</Link></li>
            <li><Link to="/error">Privacy Policy</Link></li>
          </ul>
        </nav>
        <nav className="footer-social">
          <ul>
            <li><Link to="/error">Facebook</Link></li>
            <li><Link to="/error">LinkedIn</Link></li>
            <li><Link to="/error">Twitter</Link></li>
            <li><Link to="/error">Instagram</Link></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>example@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default DarkFooter;
