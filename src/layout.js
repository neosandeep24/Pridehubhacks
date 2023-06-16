import { Outlet, Link } from "react-router-dom";

import Faq from "./pages/faq";
import Contact from "./pages/Conatct";
import Blogs from "./pages/blogs";
import home from "./pages/home"

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      
    </>
  )
};

export default Navigation;