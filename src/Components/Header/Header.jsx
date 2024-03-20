import React, { useEffect, useState } from "react";
import "./header.css";
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
            <li className="nav__items">Home</li>
            <li className="nav__items">About</li>
            <li className="nav__items">portfolio</li>
            <li className="nav__items">News</li>
            <li className="nav__items">Contact</li>
            <li className="nav__items">Button</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
