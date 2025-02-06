import React from "react";
import "./Facilities.css"; // Import the CSS file for styling

const facilitiesData = [
  {
    name: "Dental Checkup",
    icon: "🦷",
    description:
      "Regular checkups help maintain optimal dental health and detect any potential issues early.",
  },

  {
    name: "Teeth Whitening",
    icon: "🌟",
    description:
      "Achieve a brighter, whiter smile with our professional teeth whitening treatments.",
  },
  {
    name: "Pediatric Dentistry",
    icon: "👶",
    description:
      "We provide gentle dental care for children, ensuring a comfortable and positive experience.",
  },
  {
    name: "Emergency Services",
    icon: "🚑",
    description:
      "Available for urgent dental issues, we offer emergency services to treat injuries and pain.",
  },
  {
    name: "Orthodontics",
    icon: "🦷",
    description:
      "Our orthodontics services include braces and aligners to straighten your teeth and improve your smile.",
  },
  {
    name: "Cosmetic Dentistry",
    icon: "💎",
    description:
      "Enhance the appearance of your smile with cosmetic procedures like veneers, bonding, and more.",
  },
];

const Facilities = () => {
  return (
    <section className="facilities">
      <h2>Our Facilities</h2>
      <div className="facilities-container">
        {facilitiesData.map((facility, index) => (
          <div className="facility-item" key={index}>
            <div className="facility-icon">{facility.icon}</div>
            <h3>{facility.name}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
