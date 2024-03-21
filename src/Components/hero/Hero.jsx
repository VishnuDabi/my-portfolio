import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero__main__container" id="home" name="home">
      {/* <ParticleAnimation /> */}
      <div className="hero__text">
        <h1 className="span__text">I am</h1>
        {/* <br /> */}
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
