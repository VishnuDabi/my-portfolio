import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header__main__container">
        <div className="header__child  roboto-bold-italic logo__text">V</div>
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
