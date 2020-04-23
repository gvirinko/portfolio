import React from "react";

import "./App.css";
import Header from "./components/Header";
import Skills from "./Skills";
import Projects from "./Project";
import Footer from "./Footer";

import { headerInfo } from "./content";

function App() {
  return (
    <div className="App">
      <Header content={headerInfo} />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
