import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiJavascriptLine } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrap } from "react-icons/bs";
import { LiaHtml5 } from "react-icons/lia";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandFirebase } from "react-icons/tb";
function SwipeToSlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider__container">
      <Slider {...settings} className="slider_flex">
        <div>
          <h1 className="skills__logo">
            <RiJavascriptLine />
            <span>JavaScript</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <GrReactjs />
            <span>React JS</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <BiLogoRedux />
            <span>Redux</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <BsBootstrap />
            <span>Bootstrap</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <IoLogoGithub />
            <span>Github</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <LiaHtml5 />
            <span>HTML5</span>
          </h1>
        </div>

        <div>
          <h1 className="skills__logo">
            <TbBrandCss3 />
            <span>CSS</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <SiMui />
            <span>Material UI</span>
          </h1>
        </div>
        <div>
          <h1 className="skills__logo">
            <TbBrandFirebase />
            <span>Firebase</span>
          </h1>
        </div>
      </Slider>
    </div>
  );
}
export default SwipeToSlide;
