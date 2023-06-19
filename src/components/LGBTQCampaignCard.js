import React from 'react';

const LGBTQCampaignCard = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image"
      width={400}
       />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default LGBTQCampaignCard;
