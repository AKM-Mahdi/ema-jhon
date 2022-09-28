import React from "react";
import "./Home.css";
import heroImg from "../../IMAGES/hero-img.svg";

const Home = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="container">
          <div className="left">
            <span>Sale up to 70% off</span>
            <h1>New Collection For Fall</h1>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
            <a href="./">SHOP NOW</a>
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
