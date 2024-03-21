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
  const handleDownload = () => {
    // Replace the Google Drive link with your actual link
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1aN7Bdpl9Exn8BZ77XDkCtEq1yk2-FqzG";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "your_filename"; // Set the desired filename here
    link.target = "_blank"; // Open the link in a new tab
    link.rel = "noopener noreferrer"; // Security best practice

    // Append the anchor to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the anchor from the body
    document.body.removeChild(link);
  };
  return (
    <section className="about__container">
      <div className="about__child">
        <div>
          <img className="img" src="/images/about.jpg" alt="" />
        </div>
      </div>
      <div className={`about__child1 `}>
        <div className={` ${isVisible ? "visible " : "about__text"}`}>
          <span>ABOUT ME</span>
          <h1 className="py_10">
            Creative Independent Web Developer based in INDIA
          </h1>
          <p>
            As a proficient React.js developer, I possess a diverse skill set
            that includes expertise in React.js, Redux, JavaScript, Bootstrap,
            Material UI, and Github. With a keen eye for detail and a passion
            for crafting exceptional user experiences, I specialize in building
            responsive and visually appealing websites. My proficiency in
            HTML/CSS, along with my ability to leverage various libraries and
            frameworks, enables me to create dynamic and interactive web
            applications. With a focus on clean code and efficient
            problem-solving, I am committed to delivering high-quality solutions
            that meet the unique needs of each project.
          </p>

          <button className="btn__dark" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
