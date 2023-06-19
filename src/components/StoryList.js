import React from 'react';

const StoryList = ({ stories }) => {
  return (
    <div>
      <h2>Stories and Testimonials</h2>
      {stories.length === 0 ? (
        <p>No stories yet. Be the first one to share!</p>
      ) : (
        <ul>
          {stories.map((story, index) => {
           console.log(story)
            return (
            <li key={index}>
              {/* <h3>{story.name}</h3> */}
              <div dangerouslySetInnerHTML={{ __html: story.content}} />
            </li>
      )})}
        </ul>
      )}
    </div>
  );
};

export default StoryList;
