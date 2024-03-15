import React from "react";
import "./hero.css";
import ParticleAnimation from "../particles/ParticlesCanvas";

const Hero = () => {
  return (
    <div className="hero__main__container">
      {/* <ParticleAnimation /> */}
      <div className="hero__text">
        <h1 className="span__text">Vs</h1>
        <br />
        <div className="rotating-item-wrapper">
          <div className="rotating-items">
            Frontend Developer
            <br />
            React JS Developer
            <br />
            Web Developer
          </div>
        </div>
        <br />
        <button className="btn btn__upper">see portfolio</button>
      </div>
    </div>
  );
};

export default Hero;
