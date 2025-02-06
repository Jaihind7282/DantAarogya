import React from "react";
import "./Stats.css"; // Import the CSS file for styling

// Icons (using FontAwesome for simplicity)
import { FaSmile, FaCalendarAlt, FaUserNurse } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-item">
        <div className="stats-icon">
          <FaSmile />
        </div>
        <h2>77+</h2>
        <p>Satisfied Patients</p>
        <p className="stats-description">
          Our patients trust us for their dental care. We are committed to
          providing the best experience.
        </p>
      </div>

      <div className="stats-item">
        <div className="stats-icon">
          <FaCalendarAlt />
        </div>
        <h2>3+ Years</h2>
        <p>Experience</p>
        <p className="stats-description">
          With over 3 years of experience, we bring expertise and care to every
          treatment.
        </p>
      </div>

      <div className="stats-item">
        <div className="stats-icon">
          <FaUserNurse />
        </div>
        <h2>5+</h2>
        <p>Qualified Staff</p>
        <p className="stats-description">
          Our Staff of skilled professionals ensures you receive top-notch
          dental care.
        </p>
      </div>
    </div>
  );
};

export default Stats;
