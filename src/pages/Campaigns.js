import React from 'react';
import LGBTQCard from '../components/LGBTQCampaignCard';
import campaignsData from '../data/campaignsData';
import "../styles/CampaignPage.css"
const CampaignPage = () => {
  return (
    <div className="campaign-page">
      <h1 className="campaign-page-title">LGBTQ+ Campaigns</h1>
      <div className="campaign-card-container">
        {campaignsData.map((campaign) => (
          <LGBTQCard
            key={campaign.id}
            title={campaign.title}
            image={campaign.image}
            description={campaign.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CampaignPage;
