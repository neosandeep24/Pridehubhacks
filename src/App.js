// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import History from "./pages/History";
import Faq from "./pages/Faqq"
import Campaigns from "./pages/Campaigns";
import Home from "./pages/home";
import PrideHubLogo from "./components/PrideHubLogo";
import Blogs from "./pages/blogs"


import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="App-header">Pride Hub</h1>
      <BrowserRouter>
          <Link to="/">
           
              <PrideHubLogo />
          </Link>
          <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Stories" element={<Stories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="History" element={<History />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Faq" element={<Faq/>} />
          <Route path="education" element={<Education />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
