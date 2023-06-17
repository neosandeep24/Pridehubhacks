import { Outlet, Link } from "react-router-dom";


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
            <Link to="/Volunteer">Volunteer</Link>
          </li>
          <li>
            <Link to="/Events">Events and Workshops</Link>
          </li>
          <li>
          <Link to="/History">History</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
          <Link to="/Faq">FAQ</Link>
          </li>
        </ul>
      </nav>

    <Outlet/>
    </>
  )
};

export default Navigation;