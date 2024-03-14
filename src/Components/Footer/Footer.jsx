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
          <CiLinkedin />
          <ImGithub />
          <IoLogoInstagram />
          <RiFacebookCircleLine />
          <RiTwitterXLine />
        </div>
        <div className="rights">
          <p>© 2024 by ib-themes. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
