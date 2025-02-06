import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import DentistProfile from "./DentistProfile";
import ReviewCard from "./ReviewCard";
import CTA from "./CTA";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <DentistProfile />
      <ReviewCard />
      <CTA />
    </>
  );
};

export default LandingPage;
