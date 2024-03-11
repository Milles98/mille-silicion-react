import React from 'react';

const ContactUsMiddle = () => {
  return (
    <div className="container">
      <div className="contact-page-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.3958444631!2d-122.40863681012569!3d37.73385667839674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7efea1156ad3%3A0x4902837df58adf88!2sPortola%2C%20San%20Francisco%2C%20Kalifornien%2094134%2C%20USA!5e0!3m2!1ssv!2sse!4v1708011364139!5m2!1ssv!2sse"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>

        <div className="medical-centers">
          <div className="medical-center">
            <h3>Medical Center 1</h3>
            <p>
              <i className="fas fa-location-dot"></i> 4517 Washington Ave, Manchester, Kentucky 39495
            </p>
            <p><i className="fas fa-phone-volume"></i> (405) 555-0120</p>
            <p>
              <i className="fas fa-clock"></i> <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm
            </p>
            <p className='medical-center-bold'> <strong>Sat - Sun:</strong> 9:00 am - 20:00 pm</p>
          </div>

          <div className="medical-center">
            <h3>Medical Center 2</h3>
            <p>
              <i className="fas fa-location-dot"></i> 2464 Royal Ln, Mesa New Jersey 45643
            </p>
            <p><i className="fas fa-phone-volume"></i> (406) 544-0123</p>
            <p>
              <i className="fas fa-clock"></i> <strong>Mon - Fri:</strong> 9:00 am - 22:00 pm
            </p>
            <p className='medical-center-bold'> <strong>Sat - Sun:</strong> 9:00 am - 20:00 pm</p>
          </div>

          <div className="social-icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMiddle;
