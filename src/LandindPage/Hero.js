import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Dant Aarogya Hospital</h1>
        <p className="hero-paragraph">
          Best dental hospital in biharshriff. We provide the best dental
          services with state-of-the-art technology and a team of experienced
          professionals.
        </p>
        <Link to="/enquiry" className="hero-button">
          Enquiry Now
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="/images/logo.png"
          alt="Dental Hospital"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default Hero;
