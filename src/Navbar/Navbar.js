import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarToggle from "./NavbarToggle";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (e) => {
    console.log(`${e.target.textContent} menu item clicked`);
    setIsOpen(false);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <NavbarLogo />
      <NavbarLinks
        isOpen={isOpen}
        isServicesOpen={isServicesOpen}
        toggleServicesDropdown={toggleServicesDropdown}
        handleClick={handleClick}
        handleMenuItemClick={handleMenuItemClick}
        handleMouseLeave={handleMouseLeave}
      />
      <NavbarToggle toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
