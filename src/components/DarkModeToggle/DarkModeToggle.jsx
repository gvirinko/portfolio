import React from "react";
import { DarkModeContext } from "../DarkModeContext/DarkModeContext";
import { ToggleComponent, Toggle } from "./elements";

export const DarkModeToggle = () => {
  const { toggleDarkMode } = React.useContext(DarkModeContext);
  const { isDarkModeOn } = React.useContext(DarkModeContext);

  return (
    <ToggleComponent>
      <Toggle onClick={toggleDarkMode}>
        {isDarkModeOn ? "Light Mode" : "Dark Mode"}
      </Toggle>
    </ToggleComponent>
  );
};
