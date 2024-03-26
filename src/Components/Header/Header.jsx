import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
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
    console.log(window.innerWidth);
  });

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
                className="link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav__items">
              <Link
                className="link"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav__items">
              <Link
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
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
            <ul className="mobile__nav__list">
              <li className="mobile__nav__items">
                <Link
                  activeClass="active"
                  className="link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  className="link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  className="link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="mobile__nav__items">
                <Link
                  className="link"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>

              <li className="mobile__nav__items">
                <Link
                  className="link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
