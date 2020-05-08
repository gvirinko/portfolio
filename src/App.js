import React from "react";

import Header from "./components/Header";
// import DarkModeToggle from "./components/DarkModeToggle";
import Commits from "./components/Commits";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { headerInfo, footerInfo, skillsList, projectsList } from "./content";

function App() {
  return (
    <div className="App">
      <Header content={headerInfo} />
      {/* <DarkModeToggle /> */}
      <Commits />
      <Skills content={skillsList} />
      <Projects content={projectsList} />
      <Footer content={footerInfo} />
    </div>
  );
}

export default App;
