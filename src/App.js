import React from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
// import style from "styled-theming";
// import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import DarkMode from "./components/DarkMode";
import Commits from "./components/Commits";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import DarkModeContext from "./components/DarkModeContext";
import Resume from "./components/Resume";
import PageNotFound from "./components/PageNotFound";

import { headerInfo, footerInfo, skillsList, projectsList } from "./content";

const App = () => {
  // const { isDarkModeOn } = React.useContext(DarkModeContext);

  return (
    <Router>
      {/* <ThemeProvider theme={{ mode: "dark" }}> */}
      <div className="App">
        {/* <GlobalStyle /> */}
        {/* <DarkMode /> */}
        <Header content={headerInfo} />
        <NavBar />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Projects {...props} content={projectsList} />}
            />
            <Route path="/resume" component={Resume}></Route>
            <Route
              path="/skills"
              render={(props) => <Skills {...props} content={skillsList} />}
            />
            <Route path="/commits" component={Commits}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </main>
        <Footer content={footerInfo} />
      </div>
      {/* </ThemeProvider> */}
    </Router>
  );
};

export default App;
