import React from 'react';
import ContentCard from './ContentCard';

const ContentSection = ({ title, contentItems,active }) => {
  if(!active) return null;
    return (
    <div className="content-section">
      <h2>{title}</h2>
      {contentItems.map((item, index) => (
        <ContentCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ContentSection;
