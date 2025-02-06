import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css"; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Dant Aarogya Hospital Logo" />
        </div>

        {/* Footer Details - Hospital Info */}
        <div className="footer-info">
          <h3>Dant Aarogya Hospital</h3>
          <p>New Rahui Road,Mogal Kuan,Biharshriff (NALANDA)</p>
          <p>Phone: +91 7004391132</p>
          <p>Email: dantaarogyahospital@gmail.com</p>
        </div>

        {/* Footer Navigation Links */}
        <div className="footer-navigation">
          <ul>
            <li>
              <Link to="/services">Services</Link> {/* Replaced a with Link */}
            </li>
            <li>
              <Link to="/facilities">Facilities</Link>{" "}
              {/* Replaced a with Link */}
            </li>
            <li>
              <Link to="/gallery">Gallery</Link> {/* Replaced a with Link */}
            </li>
            <li>
              <Link to="/about">About Us</Link> {/* Replaced a with Link */}
            </li>
            <li>
              <Link to="/contact">Contact Us</Link> {/* Replaced a with Link */}
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Dant Aarogya Hospital. All rights reserved.</p>
        <a
          href="https://maps.app.goo.gl/AQAvt46jH9AfDBU58?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @im_ JAI SINGH
        </a>
      </div>

      {/* This remains as a normal anchor tag since it's an external link */}
    </footer>
  );
};

export default Footer;
