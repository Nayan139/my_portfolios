import React from "react";
import "./Footer.css";
import Shape from "../../../Assets/images/shape-bg.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={Shape} alt="Shape" />
      </div>
    </div>
  );
};

export default Footer;
