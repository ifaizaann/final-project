import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.jpg";



const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
       
        <div>
          <div className="hero-hand-icon">
            <p>Welcome</p>
            
          </div>
          <p>To</p>
          <p>EYESTORE</p>
        </div>
       
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
