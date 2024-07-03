
import React, { useState } from 'react';
import './Footer.css';
import insta from "../assets/images/instagram.png";
import phone from "../assets/images/call.png";
import facebook from "../assets/images/facebook.png";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed email: ${email}`);
    setEmail('');
  };

  return (
    <div className="subscribe-section">
      <div className="subscribe-container">
        <div className='left'>
          <h2>Subscribe</h2>
          <h3>Stay informed never <br></br>
            missed an update!</h3>
        </div>
        <div className='right'>
          <p>
            Once each month we'll send you recent episodes of our Financial
            information covering the optimization of digital technology and
            irresistible people delivering a great customer experience that
            impacts the bottom line.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
      <footer className="footer">
        <div className='footer-left'>
          <div className="footer-address">
            <p>ADDRESS -</p>
          </div>
          <div className="footer-social">
            <img src={insta}></img>
            <img src={facebook}></img>
            <img src={phone}></img>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright @Fineace 2022. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Vision</li>
            <li>Download the app</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>Community</li>
            <li>Join the team</li>
            <li>Legal Stuff</li>
            <li>Terms of service</li>
          </ul>
        </div>


      </footer>
    </div>
  );
};

export default Footer;
