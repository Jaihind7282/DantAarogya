import React from "react";
import "./Services.css"; // Import the CSS file
import CTA from "../LandindPage/CTA";

const services = [
  {
    title: "Root Canal Treatment (RCT)",
    description:
      "Root canal treatment (RCT) is a dental procedure used to treat infection inside the tooth.",
    image: "images/rct.jpg", // Updated image path
  },
  {
    title: "Teeth Whitening",
    description:
      "Teeth whitening is a cosmetic dental procedure to lighten teeth and remove stains.",
    image: "images/teeth-whitening.jpg", // Updated image path
  },
  {
    title: "Dental Cleaning",
    description:
      "Regular dental cleaning helps prevent gum disease and keeps your teeth healthy and bright.",
    image: "images/dental-cleaning.jpg", // Updated image path
  },
  {
    title: "Dental Prosthesis",
    description:
      "Dental prostheses are artificial devices used to replace missing teeth or parts of teeth.",
    image: "images/dental-prosthesis.jpg", // Updated image path
  },
  {
    title: "Laser Treatment",
    description:
      "Laser dental treatments help treat various conditions such as cavities, soft tissue issues, and gum problems.",
    image: "images/laser-treatment.jpg", // Updated image path
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are a permanent solution for missing teeth and offer a natural look and feel.",
    image: "images/dental-implants.jpg", // Updated image path
  },
  {
    title: "Tooth Filling",
    description: "Tooth fillings restore teeth damaged by cavities and decay.",
    image: "images/tooth-filling.jpg", // Updated image path
  },
  {
    title: "Orthodontics Treatment",
    description:
      "Orthodontics focuses on aligning and straightening teeth with braces or clear aligners.",
    image: "images/orthodontics.jpg", // Updated image path
  },
  {
    title: "Oral Surgery",
    description:
      "Oral surgery is used for complex dental procedures like tooth extractions and jaw surgeries.",
    image: "images/oral-surgery.jpg", // Updated image path
  },
  {
    title: "Fracture Cases",
    description:
      "Treatment for fractures or dental injuries that affect teeth and jawbones.",
    image: "images/fracture-cases.jpg", // Updated image path
  },
];

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
        </div>
        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
};

export default Services;
