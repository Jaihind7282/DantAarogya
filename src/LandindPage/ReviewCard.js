import React, { useState, useEffect } from "react";
import "./ReviewCard.css"; // Import the CSS file

const reviews = [
  {
    id: 1,
    image: "images/logo.png",
    name: "Gaurav Kumar",
    stars: 5,
    message: "Great service! The staff was very friendly and professional.",
  },
  {
    id: 2,
    image: "images/logo.png",
    name: "Rajiv Ranjan",
    stars: 4,
    message: "Very clean and modern facility. Highly recommend!",
  },
  {
    id: 3,
    image: "images/logo.png",
    name: "Soniya Singh",
    stars: 5,
    message: "The best dental experience I’ve ever had. Thank you!",
  },
  {
    id: 4,
    image: "images/logo.png",
    name: "Amir ",
    stars: 5,
    message: "Painless and efficient. Will definitely come back.",
  },
  {
    id: 5,
    image: "images/logo.png",
    name: "Sneha Singh",
    stars: 4,
    message: "Excellent care and attention to detail. Very satisfied.",
  },
];

const ReviewCard = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // State to manage which review is shown

  // Set an interval to show the next review card
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change the card every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="review-container">
      <div className="review-card">
        <img
          src={currentReview.image}
          alt={currentReview.name}
          className="review-image"
        />
        <h3 className="review-name">{currentReview.name}</h3>
        <div className="review-stars">
          {"★".repeat(currentReview.stars)}
          {"☆".repeat(5 - currentReview.stars)}
        </div>
        <p className="review-message">{currentReview.message}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
