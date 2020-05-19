import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DarkMode from "./components/DarkMode";
import Commits from "./components/Commits";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkModeContext from "./components/DarkModeContext";

import { headerInfo, footerInfo, skillsList, projectsList } from "./content";

// const theme = { main: "black" };
// color: ${ (props) => props.theme.main };

function App() {
  const { isDarkModeOn } = React.useContext(DarkModeContext);

  return (
    <Router>
      {/* <ThemeProvider theme={{ mode: "dark" }}> */}
      <div className="App">
        {/* <GlobalStyle /> */}
        <DarkMode />
        <Header
          content={headerInfo}
          className={isDarkModeOn ? "dark-mode" : "light-mode"}
        />
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Projects content={projectsList} />
              <Skills content={skillsList} />
              <Commits />
            </Route>
            <Route path="/resume">
              <div>My resume in PDF</div>
            </Route>
          </Switch>
        </main>
        <Footer content={footerInfo} />
      </div>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
