import React, { useState } from 'react';
import Notification from '../../../images/newsletter/notification.svg';

const NewsLetter = () => {
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
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData}`);
      }

      setEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <section id="newsletter">
      <div className="container">
        <div className="content">
          <div className="left-newsletter">
            <img src={Notification} alt="Notification" />
            <h4>Subscribe to our newsletter to stay<br></br> informed about latest updates</h4>
          </div>
          <div className="form-newsletter">
            <form className="newsletter-form" id="newsletter-form" noValidate onSubmit={handleSubscribe}>
              <div className="input-wrapper">
                <i className="fa-regular fa-envelope email-icon"></i>
                <input
                  type="email"
                  id="newsletter-form-id"
                  placeholder="Your Email"
                  aria-label="Email for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button className="btn-theme" type="submit">Subscribe</button>
            </form>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter