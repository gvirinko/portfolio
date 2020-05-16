import React from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
// import style from "styled-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import DarkMode from "./components/DarkMode";
// import Commits from "./components/Commits";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { headerInfo, footerInfo, skillsList, projectsList } from "./content";

// const someButton = styled.button`
//   color: blue
// `;

// const myGlobalStyle = createGlobalStyle`
//   someButton {
//     color: red;
//   }
// `;

// const getBackground = style("mode", {
//   light: "#b5d491",
//   dark: "black",
// });

// const getForeground = style("mode", {
//   light: "black",
//   dark: "#2f4858",
// });

// const GlobalStyle = createGlobalStyle`
// body {
//   background-color: ${getBackground};
//   color: ${getForeground};
// }
// `;

function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={{ mode: "light" }}> */}
      <div className="App">
        {/* <GlobalStyle /> */}
        {/* <DarkMode /> */}
        <Header content={headerInfo} />
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              {/* <Commits /> */}
              <Skills content={skillsList} />
              <Projects content={projectsList} />
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
