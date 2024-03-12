import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero__main__container">
      {/* <div className="shane_tm_hero" id="home" data-style="one">
        <div id="tsparticles">
          <canvas
            data-generated="false"
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "initial",
            }}
          ></canvas>
        </div>
        <div className="frame-layout__particles"></div>
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: 'url("../../../public/download.png")',
            }}
          ></div>
        </div>
        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Bostami
                  <br />
                </span>{" "}
                <div className="x0 x1 x2 ">
                  <div
                    style={{
                      transition: "width 150ms linear 0s",
                      height: "45.5px",
                      width: "286px",
                    }}
                  >
                    <div
                      className="x0 x3 x4 x5"
                      style={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        position: "absolute",
                      }}
                    >
                      <span className="loop-text"> Content Creator.</span>
                    </div>
                  </div>
                </div>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            <div className="job_wrap">
              <span className="job">
                based in USA.<span className="overlay_effect"></span>
              </span>
            </div>
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO<span className="overlay_effect"></span>
            </a>
          </div>
        </div>
      </div> */}
      <div className="hero__text">
        <span className="span__text">Vs</span>
        <div className="slider">
          <h1 className="slider-text1">React Js Developer</h1>
          <h1>Web Developer</h1>
          <h1>UI/UX Designer</h1>
        </div>
        <button className="btn btn__upper">see portfolio</button>
      </div>
    </div>
  );
};

export default Hero;
