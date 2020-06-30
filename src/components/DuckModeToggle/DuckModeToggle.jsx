import React from "react";

import { DuckModeContext } from "../DuckModeContext/DuckModeContext";
import { ToggleComponent, Toggle } from "./elements";

export const DuckModeToggle = () => {
  const { toggleDuckMode } = React.useContext(DuckModeContext);
  const { isDuckModeOn } = React.useContext(DuckModeContext);

  return (
    <ToggleComponent>
      <Toggle onClick={toggleDuckMode}>
        {isDuckModeOn ? "Pic Mode" : "Duck Mode"}
      </Toggle>
    </ToggleComponent>
  );
};
