import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from "./pages/home"
import Blogs from "./pages/blogs";
import Faq from './pages/Faqq';
import Contact from "./pages/Contact";
import History from './pages/History';
import Events from './pages/events';
import Volunteer from './pages/volunteer';

export default function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>PRIDEHUB</h1>
      </header>
      <div className="router">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="History" element={<History />} />
          <Route path="Events" element={<Events />} />
          <Route path="Volunteer" element={<Volunteer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
 </div>
    </div>
  );
}
