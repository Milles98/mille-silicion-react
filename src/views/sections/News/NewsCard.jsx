import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/news');
      const data = await response.json();
      setNews(data);
    };

    fetchNews().catch(console.error);
  }, []);

  return (
    <div className="news-grid container">
      {news.map(article => (
        <NewsCard
            key={article.id}
            imageUrl={article.imageUrl}
            date={article.published}
            category={article.category}
            title={article.title}
            author={`${article.author.firstName} ${article.author.lastName}`}
            profileImageUrl={article.author.profileImageUrl}
        />
      ))}
    </div>
  );
};

const NewsCard = ({ title, date, author, imageUrl, category, profileImageUrl }) => {
    return (
        
      <div className="news-card">
        <i className="fa-regular fa-bookmark bookmark-icon"></i>
        <img src={imageUrl} alt={title} className="news-image" />
        <div className="news-content">
          <div className="news-header">
            <div className="news-category">{category}</div>
            <div className="news-date">{date}</div>
          </div>
          <h5 className="news-title">{title}</h5>
          <div className="news-footer">
            <img src={profileImageUrl} alt={author} className="profile-image" />
            <span className="news-author">{author}</span>
          </div>
        </div>
      </div>
    );
  };
  

export default NewsList;
