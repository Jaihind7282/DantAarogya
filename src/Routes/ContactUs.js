import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-item">
          <FaPhone className="icon" />
          <p className="contact-text">+91 7004391132</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p className="contact-text">
            New Rahui Road,Mogal Kuan,Biharshriff (NALANDA)
          </p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p className="contact-text">dantaarogyahospital@gmail.com</p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactUs;
