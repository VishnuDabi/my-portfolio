import React, { useEffect, useState, useRef } from "react";
import "./skills.css";

const Skills = () => {
  const [data, setData] = useState([
    {
      name: "Web Development",
      skillLevel: "90%",
    },
    {
      name: "JavaScript",
      skillLevel: "80%",
    },
    {
      name: "React js",
      skillLevel: "90%",
    },
    {
      name: "HTML/CSS",
      skillLevel: "85%",
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = skillRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 50;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="skill__section" name="skills">
      <div
        className={`${
          isVisible ? "skills__container__active " : "skills__container"
        }`}
        ref={skillRef}
      >
        <div className="skills__childs">
          <h1>I have high skills in developing and programming</h1>
          <p>
            As an skilled Developer in development and programming, I specialize
            in crafting polished, visually striking, and technically proficient
            solutions. Currently, I'm dedicated to creating a variety of
            projects for personal use or practice, each meticulously designed to
            hone my skills and push the boundaries of innovation.
          </p>
        </div>
        <div className="skills__childs">
          {data.map(({ name, skillLevel }, index) => {
            return (
              <div key={index}>
                <p className="skills__name">
                  <span>{name}</span>
                  <span>{skillLevel}</span>
                </p>
                <div className="progress__bar">
                  <div
                    className={`${isVisible ? "progress-value" : ""}`}
                    style={{ width: skillLevel }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
