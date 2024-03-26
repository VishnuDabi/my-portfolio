import React from "react";
import "./footer.css";
import { CiLinkedin } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section className="footer__main">
      <div className="footer__container">
        <div className="footer__icons">
          <a
            href="https://www.linkedin.com/in/vishnu-dabi-rajput"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="footer_icon" />
          </a>
          <a
            href="https://github.com/VishnuDabi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub className="footer_icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="footer_icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleLine className="footer_icon" />
          </a>
          <a
            href="https://twitter.com/vishnu_dabi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine className="footer_icon" />
          </a>
        </div>
        <div className="rights">
          <p>© 2024 . All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
