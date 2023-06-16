import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Home from "./pages/home"
import Blogs from "./pages/blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage"

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>PRIDEHUB</h1>
      </header>
     <Navigation/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
