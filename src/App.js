import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./theme";
import DarkModeToggle from "./components/DarkModeToggle";
import { DarkModeContext } from "./components/DarkModeContext/DarkModeContext";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Commits from "./components/Commits";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

import { headerInfo, footerInfo, skillsList, projectsList } from "./content";

const App = () => {
  const { isDarkModeOn } = React.useContext(DarkModeContext);
  return (
    <Router>
      <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
        <div className="App">
          <DarkModeToggle />
          <Header content={headerInfo} />
          <NavBar />
          <main>
            <Switch>
              <Route
                exact
                path="/portfolio"
                render={(props) => (
                  <Projects {...props} content={projectsList} />
                )}
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
      </ThemeProvider>
    </Router>
  );
};

export default App;
