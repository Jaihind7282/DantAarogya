import React from "react";

const NavbarToggle = ({ toggleMenu }) => {
  return (
    <div className="navbar-toggle" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavbarToggle;
