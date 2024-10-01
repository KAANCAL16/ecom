import React from "react";
import "./Footer.css";
import cards from "./images/cards.png";
import Policy from "./Policy/Policy";

const Footer = () => {
  return (
    <div>
      <div className="policy">
        <Policy />
      </div>
      <footer className="footer-container">
        <div className="container">
          <div className="footer-left">
            <h4>Send Us Your Email Address</h4>
            <p>be informed about the latest discounts</p>
            <div className="footer-input">
              <input type="email" placeholder="Enter your e-mail address..." />
              <button className="footer-btn">Send</button>
            </div>
            <p className="footer-policy">
              If you send your e-mail address, you accept the cookie policy!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="footer-right">
            <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Help & FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Shop</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Help & FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <a href="mailto:kaancal99@gmail.com">kaancal99@gmail.com</a>
            <a href="tel:05060276788"> +90 (506) 027 67 88 </a>
          </div>
          <div className="footer-cards">
            <img src={cards} alt="Payment Cards" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
