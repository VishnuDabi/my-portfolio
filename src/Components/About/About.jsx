import React, { useEffect, useState } from "react";
import "./about.css";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".about__child1");
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
    <section className="about__container">
      <div className="about__child">
        <div>
          <img
            className="img"
            src="https://shanereact.ibthemespro.com/img/about/1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`about__child1 `}>
        <div className={` ${isVisible ? "visible " : "about__text"}`}>
          <span>ABOUT ME</span>
          <h1>Creative Independent Web Developer based in USA</h1>
          <p>
            I'm web designer, and I'm very passionate and dedicated to my work.
            With 20 years experience as a professional web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <button className="btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
