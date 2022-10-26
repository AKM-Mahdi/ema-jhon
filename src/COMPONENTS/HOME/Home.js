import React from "react";
import "./Home.css";
import heroImg from "../../IMAGES/hero-img.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="heroSection">
      <div className="container">
        <div className="heroContent">
          <div className="left">
            <span>Sale up to 70% off</span>
            <h1>New Collection For Fall</h1>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
            <Link to="/shop">SHOP NOW</Link>
          </div>
          <div className="right">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
