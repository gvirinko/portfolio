import React from "react";

import { FooterComponent } from "./elements";

export const Footer = ({ content }) => {
  const { year } = content;
  return (
    <FooterComponent>
      {year + " "}
      <span role="img" aria-label="Cooking">
        🍳
      </span>
    </FooterComponent>
  );
};
