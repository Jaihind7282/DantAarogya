import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isServicesOpen, handleMenuItemClick }) => {
  return (
    isServicesOpen && (
      <div className="dropdown-menu">
        <Link to="/services" onClick={handleMenuItemClick}>
          RCT
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Teeth Whitening
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Dental Cleaning
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Dental Prosthesis
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Laser Treatment
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Dental Implants
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Tooth Filling
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Orthodontics Treatment
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Oral Surgery
        </Link>
        <Link to="/services" onClick={handleMenuItemClick}>
          Fracture Cases
        </Link>
      </div>
    )
  );
};

export default DropdownMenu;
