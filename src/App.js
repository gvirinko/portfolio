import React from "react";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { headerInfo, footerInfo } from "./content";

function App() {
  return (
    <div className="App">
      <Header content={headerInfo} />
      <Skills />
      <Projects />
      <Footer content={footerInfo} />
    </div>
  );
}

export default App;
