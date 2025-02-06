import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./CTA.css"; // Assuming CSS is in the same directory

const CTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2>Get Your Smile Back Today!</h2>
        <p>
          Schedule an appointment with our expert dentists for a consultation or
          treatment.
        </p>
        <Link to="/contact" className="cta-button">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default CTA;
