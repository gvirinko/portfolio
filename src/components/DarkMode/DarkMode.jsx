import React from "react";

import DarkModeContext from "../DarkModeContext";
import { DarkModeComponent, DarkModeButton } from "./elements";

export const DarkMode = () => {
  const { toggleDarkMode } = React.useContext(DarkModeContext);
  return (
    <DarkModeComponent>
      <DarkModeButton onClick={toggleDarkMode}>Toggle Dark Mode</DarkModeButton>
    </DarkModeComponent>
  );
};
