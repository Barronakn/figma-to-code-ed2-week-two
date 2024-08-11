import React from "react";
import DesktopNavbar from "../Components/Navbar/DesktopNavbar";
import ResponsiveNavbar from "../Components/Navbar/ResponsiveNavbar";

const Navbar = () => {
  return (
    <div className="container">
      <DesktopNavbar />
      <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;
