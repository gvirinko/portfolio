import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./components/DarkModeContext/DarkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
