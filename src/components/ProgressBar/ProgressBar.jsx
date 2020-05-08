import React from "react";

import { ProgressBarComponent, ProgressBarBar } from "./elements";

export const ProgressBar = (props) => {
  return (
    <ProgressBarComponent>
      <ProgressBarBar
        style={{ width: `${props.level * 10}%` }}
      ></ProgressBarBar>
    </ProgressBarComponent>
  );
};

// export default ProgressBar;
