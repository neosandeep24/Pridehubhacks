import React, { useState, useRef } from 'react';

const StoryForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [format, setFormat] = useState([]);

  const textareaRef = useRef(null);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setFormat((prevFormat) => [...prevFormat, name]);
    } else {
      setFormat((prevFormat) => prevFormat.filter((item) => item !== name));
    }
  };

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   // setFile(selectedFile);
  // };

  const handleTextChange = (e) => {
    const updatedContent = e.target.value;
    setContent(updatedContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content || content.trim() === '') {
      return;
    }

    onSubmit({ content });

    setContent('');
    setFormat([]);
  };

  return (
    <form className="story-form" onSubmit={handleSubmit}>
      <h2>Share Your Story</h2>
      <div className="textarea-container">
        <textarea
          ref={textareaRef}
          className={`formatted-textarea ${
            format.includes('underline') ? 'underline' : ''
          } ${format.includes('italic') ? 'italic' : ''} ${
            format.includes('bold') ? 'bold' : ''
          }`}
          value={content}
          onChange={handleTextChange}
          placeholder="Enter your story"
          required
        />
      </div>
      <div className="features-container">
        <label>
          <input
            type="checkbox"
            name="underline"
            checked={format.includes('underline')}
            onChange={handleCheckboxChange}
          />
          Underline
        </label>
        <label>
          <input
            type="checkbox"
            name="italic"
            checked={format.includes('italic')}
            onChange={handleCheckboxChange}
          />
          Italic
        </label>
        <label>
          <input
            type="checkbox"
            name="bold"
            checked={format.includes('bold')}
            onChange={handleCheckboxChange}
          />
          Bold
        </label>
      </div>
      {/* <div className="upload-container">
        <input type="file" id="file-input" onChange={handleFileChange} />
        <label htmlFor="file-input">Upload Picture</label>
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StoryForm;
