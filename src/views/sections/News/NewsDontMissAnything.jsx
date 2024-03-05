import React, { useState } from 'react';
import Arrows from '../../../images/news/arrows.svg';

const NewsDontMissAnything = () => {
  // State hooks for each newsletter type
  const [dailyNewsletter, setDailyNewsletter] = useState(false);
  const [eventUpdates, setEventUpdates] = useState(false);
  const [advertisingUpdates, setAdvertisingUpdates] = useState(true); // Default checked
  const [startupsWeekly, setStartupsWeekly] = useState(false);
  const [weekInReview, setWeekInReview] = useState(false);
  const [podcasts, setPodcasts] = useState(false);

  // onChange handlers for each newsletter type
  const handleCheckboxChange = (setter) => (event) => setter(event.target.checked);

  return (
    <section id="dont-want-to-miss-anything">
      <div className="container">
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
          <div className="input-wrapper">
            <i className="fa-regular fa-envelope email-icon"></i>
            <input type="email" placeholder="Your Email" aria-label="Email for newsletter" />
            <button className="btn-theme" type="submit">Subscribe*</button>
          </div>
        </div>
        <p className="disclaimer">* Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.</p>
      </div>
    </section>
  );
};

export default NewsDontMissAnything;
