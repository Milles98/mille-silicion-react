import React from 'react';
import { Link } from 'react-router-dom';

const NewsTop = () => {
  return (
    <div className="breadcrumb-container container">
      <div className="location">
        <p>
          <Link className='house-text' to='/'><i className="fa-regular fa-house"></i> Home</Link>
          <i className="fa-solid fa-angles-right"></i>
        </p>
        <Link to="/news">News</Link>
      </div>
      <h1>Our News</h1>
    </div>
  );
};

export default NewsTop;
