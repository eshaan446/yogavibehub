import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          Our vision is to foster a harmonious environment where each individual<br/>discovers their own sacred haven through the practice of yoga.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span style={{color:'#2949c6'}}className="primaryText">Yoga<span className="headingx">VibeHub</span>💙</span>
          <span className="secondaryText"> Unveil Your Inner Radiance through Yoga.</span>
          <span className="secondaryText">Made with 💙 in India. </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <Link to={'/contact'}><span>Contact Us</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;