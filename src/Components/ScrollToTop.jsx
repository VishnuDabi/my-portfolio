import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
const ScrollToTop = ({ scrolled }) =>
  scrolled && (
    <div className="scroll__top">
      <FaArrowUp
        fontSize="30px"
        color="#fff"
        onClick={() => animateScroll.scrollToTop()}
      />
    </div>
  );

export default ScrollToTop;
