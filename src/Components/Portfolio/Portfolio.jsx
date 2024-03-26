import React, { useState } from "react";
import "./portfolio.css";
const Portfolio = () => {
  const [imgData, setImgData] = useState([
    {
      img: "./images/larq-clone.png",
      link: "https://larq-clone.netlify.app",
      webName: "E-commerse Larq clone ",
    },
    {
      img: "./images/portfolio-clone.png",
      link: "https://portfolio-clone-vd.netlify.app",
      webName: "Portfolio clone ",
    },
    {
      img: "./images/weather-app.png",
      link: "https://vishnu-dabi-wheather.netlify.app",
      webName: "Weather App ",
    },
    // {
    //   img: "./images/crud-application.png",
    // },
    // {
    //   img: "./images/validation-form.png",
    // },
  ]);
  return (
    <main className="portfolio__container" name="portfolio">
      <div>
        <h3>PORTFOLIO</h3>
        <h1>My Projects</h1>
        <div className="my__projects">
          {imgData.map(({ img, link, webName }, index) => (
            <div className="projects__cards" key={index}>
              <a href={link} target="_blank " rel="web-link">
                <div>
                  <img className="project__img" src={img} alt="" />
                  <div className="card__text__container">
                    <p>{webName}</p>
                    <span href={link} target="_blank " rel="web-link">
                      Visit website
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
