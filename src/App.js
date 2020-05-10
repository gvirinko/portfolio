import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";

import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
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
    // <ThemeProvider theme={{ mode: "light" }}>
    <div className="App">
      {/* <GlobalStyle /> */}
      {/* <DarkMode /> */}
      <Header content={headerInfo} />
      {/* <Commits /> */}
      <Skills content={skillsList} />
      <Projects content={projectsList} />
      <Footer content={footerInfo} />
    </div>
    // </ThemeProvider>
  );
}

export default App;
