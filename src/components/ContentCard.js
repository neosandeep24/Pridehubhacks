import React from 'react';

const ContentCard = ({ title, content, videoUrl }) => {
  return (
    <div className="content-card">
      <h2>{title}</h2>
      {videoUrl ? (
        <div className="video-container">
          <iframe 
            src={videoUrl}
            title="LGBTQ+ Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default ContentCard;
