import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUsTop = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    Specialist: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendDataToAPI = async () => {
    try {
      const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          Specialist: formData.Specialist,
          date: formData.date,
          time: formData.time,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        const errorMessage = errorData || `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.text();
      console.log('Success:', data);
      alert('Appointment made successfully.');
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred while making the appointment. ${error.toString()}`);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      sendDataToAPI();
    }
  };


  return (
    <div className="container">
      <div className="location">
        <p>
          <i className="fa-regular fa-house"></i> Home
          <i className="fa-solid fa-angles-right"></i>
        </p>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="contact-us">
        <div>
          <h1>Contact Us</h1>
          <div className="contact-item">
            <i className="fa-regular fa-envelope contact-icon"></i>
            <div className="contact-text">
              <h2>Email us</h2>
              <p>Please feel free to drop us a line. We will <span className='break'></span> respond as soon as possible.</p>
              <Link to="/contact">Leave a message -&gt;</Link>
            </div>
          </div>
          <div className="contact-item">
            <i className='fa-light fa-user-group contact-icon'></i>
            <div className="contact-text">
              <h2>Careers</h2>
              <p>Sit ac ipsum leo lorem magna nunc mattis <span className='break'></span> maecenas non vestibulum.</p>
              <Link to="/careers">Send an application -&gt;</Link>
            </div>
          </div>
        </div>
        <div className="online-consultation">
          <h2>Get Online Consultation</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="full-name">Full name</label>
              <input type="text" id='full-name' name='fullName' value={formData.fullName} onChange={handleChange} required />
              {errors.fullName && <div className="error">{errors.fullName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email-address">Email address</label>
              <input type="email" id='email-address' name='email' value={formData.email} onChange={handleChange} required />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="specialist">Specialist</label>
              <select
                name="Specialist"
                id="specialist"
                value={formData.Specialist}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value=".NET">.NET</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
              </select>
              {errors.Specialist && <div className="error-message">{errors.Specialist}</div>}
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" name='date' id='date' value={formData.date} onChange={handleChange} required />
                {errors.date && <div className="error">{errors.date}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" name='time' id='time' value={formData.time} onChange={handleChange} required />
                {errors.time && <div className="error">{errors.time}</div>}
              </div>
            </div>
            <button className="btn-theme" type='submit'>Make an appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsTop;
