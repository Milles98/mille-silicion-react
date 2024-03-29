import React, { useState } from 'react';
import Arrows from '../../../images/news/arrows.svg';
import CustomAlert from '../../components/CustomAlert';

const NewsDontMissAnything = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [customAlertConfig, setCustomAlertConfig] = useState({ message: '', type: '' });

  const handleCustomAlert = (message, type) => {
    setCustomAlertConfig({ message, type });
    setShowCustomAlert(true);
  };

  const [dailyNewsletter, setDailyNewsletter] = useState(false);
  const [eventUpdates, setEventUpdates] = useState(false);
  const [advertisingUpdates, setAdvertisingUpdates] = useState(true);
  const [startupsWeekly, setStartupsWeekly] = useState(false);
  const [weekInReview, setWeekInReview] = useState(false);
  const [podcasts, setPodcasts] = useState(false);

  const handleCheckboxChange = (setter) => (event) => setter(event.target.checked);

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
        throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData.message}`);
      }

      setEmail('');
      handleCustomAlert('Thank you for subscribing!', 'success');
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <section id="dont-want-to-miss-anything">
      <div className="container">
        {showCustomAlert && (
          <CustomAlert
            config={customAlertConfig}
            onClose={() => setShowCustomAlert(false)}
          />
        )}
        <div className="header">
          <h1>Don’t Want to Miss Anything?</h1>
          <img src={Arrows} alt="Arrows" />
        </div>
        <div className="newsletter-signup">
          <h5>Sign up for Newsletters</h5>
          <div className="checkbox-grid">
            <div className="checkbox-column">
              <label className="checkbox-container"> Daily Newsletter
                <input type="checkbox" checked={dailyNewsletter} onChange={handleCheckboxChange(setDailyNewsletter)} />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container"> Event Updates
                <input type="checkbox" checked={eventUpdates} onChange={handleCheckboxChange(setEventUpdates)} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-column">
              <label className="checkbox-container"> Advertising Updates
                <input type="checkbox" checked={advertisingUpdates} onChange={handleCheckboxChange(setAdvertisingUpdates)} />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container"> Startups Weekly
                <input type="checkbox" checked={startupsWeekly} onChange={handleCheckboxChange(setStartupsWeekly)} />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-column">
              <label className="checkbox-container"> Week in Review
                <input type="checkbox" checked={weekInReview} onChange={handleCheckboxChange(setWeekInReview)} />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container"> Podcasts
                <input type="checkbox" checked={podcasts} onChange={handleCheckboxChange(setPodcasts)} />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <form className='input-wrapper' onSubmit={handleSubscribe} noValidate>
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
              <button className="btn-theme" type="submit">Subscribe*</button>
            </div>
          </form>
          {error && <div className="error-message-news">{error}</div>}
        </div>
        <p className="disclaimer">* Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.</p>
      </div>
    </section>
  );
};

export default NewsDontMissAnything;
