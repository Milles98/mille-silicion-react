import React from 'react'
import Notification from '../../images/newsletter/notification.svg'

const NewsLetter = () => {
  return (
    <section id="newsletter">
              <div className="container">
                <div className="content">
                  <img src={Notification} alt="Notification"/>
                  <h4>Subscribe to our newsletter to stay<br></br> informed about latest updates</h4>
                  <div className="form-newsletter">
                    <form className="newsletter-form" id="newsletter-form" novalidate>
                      <div className="input-wrapper">
                        <i className="fa-regular fa-envelope email-icon"></i>
                        <input
                          type="email"
                          id="newsletter-form-id"
                          placeholder="Your Email"
                          aria-label="Email for newsletter"
                          required
                        />
                      </div>
                      <button className="btn-theme" type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default NewsLetter