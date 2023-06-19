import "../styles/contact.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFlickr } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="header">Connect with the Center</h1>
      <div className="contact-container">
        <div className="section newsletter-section">
          <h5 className="section-title">NEWSLETTER</h5>
          <div className="form-inputs">
            <div className="input-group">
              <label className="input-label" htmlFor="firstName">
                First Name*
              </label>
              <input id="firstName" type="text" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="lastName">
                Last Name*
              </label>
              <input id="lastName" type="text" className="input-field" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="email">
                Email*
              </label>
              <input id="email" type="text" className="input-field" />
            </div>
          </div>
          <button className="submit-btn">SUBMIT</button>
        </div>

        <div className="section contact-info-section">
          <h5 className="section-title red">CONTACT US</h5>
          <div className="contact-info">
            <div className="contact-address">
              <p>208 W 13 St</p>
              <p>New York, NY 10011</p>
            </div>
            <div className="contact-phone">
              <p>212.620.7310</p>
            </div>
          </div>
          <div className="additional-info">
            <article className="info-links">
              <a href="/">LOCATION MAP</a>
              <a href="/">PRIVACY POLICY</a>
              <a href="/">CODE OF CONDUCT</a>
              <a href="/">PUBLIC HEALTH SAFETY</a>
            </article>
          </div>
        </div>

        <div className="section building-hours-section">
          <h5 className="section-title green">BUILDING HOURS</h5>
          <div className="building-hours">
            <p>Monday-Saturday 8 a.m. to 10 p.m.</p>
            <p>Sunday 8 a.m. to 8 p.m.</p>
          </div>
        </div>

        <div className="section social-media-section">
          <h5 className="section-title blue">SOCIAL MEDIA</h5>
          <div className="social-media-icons">
            <BsFacebook size={40} />
            <AiFillTwitterCircle size={40} />
            <FaFlickr size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
