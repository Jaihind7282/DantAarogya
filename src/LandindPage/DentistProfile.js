import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./DentistProfile.css"; // Ensure to create and import this CSS file

const DentistProfile = () => {
  const doctor = {
    name: "Dr. Amit Raj",
    qualifications:
      "Surgeon(Oral & Dental),FAGE(Manipal),MIDA(New Delhi),Ex-Resident Patna Dental College",
    message:
      "With over 3 years of experience in Oral And Dental, I provide personalized dental care for patients of all ages.",
    image: "images/DoctorImage.jpeg",
  };
  return (
    <div className="doctor-profile">
      <div className="doctor-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="doctor-details">
        <h2>{doctor.name}</h2>
        <p className="qualifications">{doctor.qualifications}</p>
        <p className="message">{doctor.message}</p>
        <Link to="/about" className="know-more-link">
          {" "}
          Know More
        </Link>
      </div>
    </div>
  );
};

export default DentistProfile;
