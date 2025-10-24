import React from "react";
import "./CommunitySection.css";
import ironman from "../../assets/ironman.jpg";
import getInTouchImg from "../../assets/get-in-touch.png";

const CommunitySection = () => {
  return (
    <div className="section-wrapper">
      {/* COMMUNITY */}
      <div className="community" id="community">
        <div className="community-content">
          <h1>Subscribe to the Marvel newsletter community</h1>
          <p>
            Stay updated with the latest Marvel news, releases, and exclusive
            content by subscribing to our newsletter!
          </p>
          <button id="comic-btn">Subscribe Now</button>
        </div>
        <div className="community-image">
          <img src={ironman} alt="Marvel Community" />
        </div>
      </div>

      {/* GET IN TOUCH */}
      <div className="get-in-touch">
        <div className="getin-image">
          <img src={getInTouchImg} alt="Deadpool and Wolverine" />
        </div>
        <div className="getin-content">
          <h1>Get in touch</h1>
          <p>
            Have questions or feedback? We’re here to help. Reach out to us and
            we’ll get back to you as soon as possible!
          </p>
          <a href="#contact-popup" id="comic-btn">
            Contact Now
          </a>
        </div>
      </div>

      {/* CONTACT POPUP */}
      <div id="contact-popup" className="contact-card">
        <div className="contact-content popup-modern">
          <a href="#!" className="contact-close">
            &times;
          </a>
          <div className="contact-left modern-form">
            <h2>Get in touch with us</h2>
            <form className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <select required>
                <option value="">Select Topic</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="suggestion">Suggestion</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea placeholder="Message" required></textarea>
              <button type="submit" id="comic-btn">Send Message</button>
            </form>
          </div>
          <div className="contact-right modern-image">
            <img src={getInTouchImg} alt="Marvel Characters" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
