import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings  g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Ignite Your Inner Light through Yoga. Join Us on a Journey of Self-Discovery.</span>
          <span className="secondaryText">
          Elevate Your Practice. Elevate Your Life. Start Your Yoga Journey Today!
          </span>
          <Link to='/addBooking'><button className="button">
            Get Started
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;