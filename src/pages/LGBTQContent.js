import React, { useState } from 'react';
import ContentSection from '../components/ContentSection';
import "../styles/LGBTQContent.css";
import contentSections from "../data/contentSections";
import '../App.css'

const LGBTQContent = () => {
  const [activeSection, setActiveSection] = useState('rights');

  const handleSectionClick = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="lgbtq-content-page">
      <h1 className="page-title">LGBTQ+ Education</h1>
      <ul className="navigation-list">
        {contentSections.map((section) => (
          <li
            key={section.id}
            className={`navigation-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
      {contentSections.map((section) => (
        <ContentSection
          key={section.id}
          title={section.title}
          contentItems={section.contentItems}
          active={activeSection === section.id}
        />
      ))}
    </div>
  );
};

export default LGBTQContent;
