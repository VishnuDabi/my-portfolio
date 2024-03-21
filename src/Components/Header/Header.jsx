import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

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
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            {/* <li className="nav__items">
              <Link
                className="link"
                to="news"
                spy={true}
                smooth={true}
                duration={500}
              >
                News
              </Link>
            </li> */}
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
            {/* <li className="nav__items">
              <Link
                className="link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Button
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
