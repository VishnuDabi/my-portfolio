import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
import ScrollToTop from "../ScrollToTop";
import { CiLinkedin } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.innerWidth > 778) setMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount
  useEffect(() => {
    const element = document.body;
    if (menu) {
      element.style.overflow = "hidden";
    } else {
      element.style.overflow = "unset";
    }
  }, [menu]);

  return (
    <>
      <div
        className={`header__main__container ${
          scrolled ? "bg__black" : "bg__transparent"
        } `}
      >
        <div className="header__child  roboto-bold-italic logo__text">
          Vishnu Dabi
        </div>
        <div className="header__child">
          <ul className="nav__list">
            <li className="nav__items">
              <Link
                activeClass="active"
                className="link underline__effect"
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link underline__effect"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link underline__effect"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link underline__effect"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav__items">
              <Link
                className="link underline__effect"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu" style={{ height: "30px", width: "40px" }}>
            <div className="artboard ">
              <div
                className={`overlay ${menu ? "actives " : ""}`}
                onClick={() => setMenu(!menu)}
              >
                <div className="button"></div>
              </div>
            </div>
          </div>
          <div className={`mobile_menu ${menu ? "menu__show" : "menu__hide"} `}>
            <div className="center__container"></div>
            <ul className="mobile__nav__list">
              <li className="mobile__nav__items">
                <Link
                  onClick={() => setMenu(!menu)}
                  activeClass="active"
                  className="link underline__effect"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Home
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  onClick={() => setMenu(!menu)}
                  className="link underline__effect"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  onClick={() => setMenu(!menu)}
                  className="link underline__effect"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Skills
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  onClick={() => setMenu(!menu)}
                  className="link underline__effect"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Portfolio
                </Link>
              </li>

              <li className="mobile__nav__items">
                <Link
                  onClick={() => setMenu(!menu)}
                  className="link underline__effect"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
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

              <a
                href="https://twitter.com/vishnu_dabi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="footer_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop scrolled={scrolled} />
    </>
  );
};

export default Header;
