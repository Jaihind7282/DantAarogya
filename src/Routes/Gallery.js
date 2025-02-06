import React from "react";
import "./Gallery.css"; // Make sure to import the CSS file
import CTA from "../LandindPage/CTA";

const Gallery = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image18.jpg",
    "/images/image17.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image14.jpg",
    "/images/image15.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
  ];

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-heading">
          <h1>Our Gallery</h1>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Dental-photo${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default Gallery;
