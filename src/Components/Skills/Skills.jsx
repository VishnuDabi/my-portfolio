import React, { useEffect, useState } from "react";
import "./skills.css";
const Skills = () => {
  const [data, setData] = useState({
    webDevelopment: "90%",
    javascript: "80%",
    reactJs: "90%",
    htmlCss: "85%",
  });
  const [isVisible, setIsVisible] = useState(false);

  const progressBars = document.querySelectorAll(".progress-value");

  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.setProperty("--progress-width", width);
  });
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".skill__section");
      const rect = sidebar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 50;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="skill__section">
      <div
        className={`${
          isVisible ? "skills__container__active " : "skills__container"
        }`}
      >
        <div className="skills__childs">
          <h1>I have high skills in developing and programming</h1>
          <p>
            I am working on a professional, visually sophisticated and
            technologically proficient, responsive and multi-functional personal
            portfolio template Shane.
          </p>
        </div>
        <div className="skills__childs">
          <p className="skills__name">
            <span>Web Development</span>
            <span>{data.webDevelopment}</span>
          </p>
          <div className="progress__bar">
            <div
              className="progress-value"
              style={{ width: data.webDevelopment }}
            ></div>
          </div>
          <p className="skills__name">
            <span>React JS</span>
            <span>{data.reactJs}</span>
          </p>
          <div className="progress__bar">
            <div
              className="progress-value"
              style={{ width: data.reactJs }}
            ></div>
          </div>
          <p className="skills__name">
            <span>JavaScript</span>
            <span>{data.javascript}</span>
          </p>
          <div className="progress__bar">
            <div
              className="progress-value"
              style={{ width: data.javascript }}
            ></div>
          </div>
          <p className="skills__name">
            <span>HTML/CSS</span>
            <span>{data.htmlCss}</span>
          </p>
          <div className="progress__bar">
            <div
              className="progress-value"
              style={{ width: data.htmlCss }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
