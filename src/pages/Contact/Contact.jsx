// src/ContactForm.js
import React from 'react';
import './ContactForm.css';
import email from "../assets/images/🦆 icon _envelope closed_.png"
import address from "../assets/images/Vector 23.png"
const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
          <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">SEND ➔</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <div className='item'>
            <img src={email}></img>
            <div>
              <h2>Email Us At</h2>
              <p><a href="mailto:aravind@nibo.tech">aravind@nibo.tech</a></p>
            </div>
          </div>
        </div >
        <div className="info-item">
          <div className='item'>
            <img src={address}></img>
            <div>
              <h2>Reach Us At</h2>
              <p>Address</p>
            </div>
          </div>
        </div >
        </div>
    </div>
  );
};

export default ContactForm;
