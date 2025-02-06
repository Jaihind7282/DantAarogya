import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const NavbarLinks = ({
  isOpen,
  isServicesOpen,
  toggleServicesDropdown,
  handleClick,
  handleMenuItemClick,
  handleMouseLeave,
}) => {
  return (
    <div className={`navbar-links ${isOpen ? "active" : ""}`}>
      <Link to="/" onClick={handleClick}>
        Home
      </Link>
      <div
        className="dropdown"
        onMouseEnter={toggleServicesDropdown}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/services" className="dropdown-toggle" onClick={handleClick}>
          Services
        </Link>
        <DropdownMenu
          isServicesOpen={isServicesOpen}
          handleMenuItemClick={handleMenuItemClick}
        />
      </div>
      <Link to="/facilities" onClick={handleClick}>
        Facilities
      </Link>
      <Link to="/gallery" onClick={handleClick}>
        Gallery
      </Link>
      <Link to="/about" onClick={handleClick}>
        About Us
      </Link>
      <Link to="/contact" className="contact-button" onClick={handleClick}>
        Contact Us
      </Link>
    </div>
  );
};

export default NavbarLinks;
