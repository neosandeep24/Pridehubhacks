import { useState } from "react";
import StoryForm from "../components/StoryForm";
import StoryList from "../components/StoryList";
import "../styles/Stories.css"
// import { useSidebarContext } from "../components/Navigation";


const Stories = () => {
  const [stories, setStories] = useState([]);
  // const { toggleSidebar } = useSidebarContext();
  const handleStorySubmit = (newStory) => {
    setStories([...stories, newStory]);
  };

  return ( 
    <div className="container">
      <h1>Personal Stories and Testimonials</h1>
      <div className="content">
        <StoryForm onSubmit={handleStorySubmit} />
        <StoryList stories={stories} />
      </div>
    </div>
  );
};

export default Stories;

