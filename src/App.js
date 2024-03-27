import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/hero/Hero";
import About from "./Components/About/About";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import SliderComponent from "./Components/Slider/Slider";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <SliderComponent />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default App;
