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
            I'm web designer, and I'm very passionate and dedicated to my work.
            With 20 years experience as a professional web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
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
