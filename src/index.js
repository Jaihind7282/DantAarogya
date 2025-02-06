import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandindPage/LandingPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Services from "./Routes/Services";
import Gallery from "./Routes/Gallery";
import DentistProfile from "./LandindPage/DentistProfile";
import CTA from "./LandindPage/CTA";
import Facilities from "./Routes/Facilities";
import ContactUs from "./Routes/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route
        path="/about"
        element={
          <>
            <DentistProfile /> <CTA />
          </>
        }
      />
      <Route
        path="/facilities"
        element={
          <>
            <Facilities /> <CTA />
          </>
        }
      />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
