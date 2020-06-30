import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./components/DarkModeContext/DarkModeContext";
import { DuckModeContextProvider } from "./components/DuckModeContext/DuckModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <DuckModeContextProvider>
        <App />
      </DuckModeContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
