import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/hero/Hero";
import About from "./Components/About/About";
import "./App.css";
import Skills from "./Components/Skills/Skills";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
