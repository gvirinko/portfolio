import React from "react";

import { NavComponent, NavWrapper, NavItem, StyledNavLink } from "./elements";

export const NavBar = () => {
  return (
    <NavComponent>
      <NavWrapper>
        <StyledNavLink
          to="/"
          exact
          activeStyle={{
            color: "#2f4858",
            opacity: "1",
            fontWeight: "bold",
            cursor: "default",
          }}
        >
          <NavItem>Portfolio</NavItem>
        </StyledNavLink>
        <StyledNavLink
          to="/resume"
          activeStyle={{
            color: "#2f4858",
            opacity: "1",
            fontWeight: "bold",
            cursor: "default",
          }}
        >
          <NavItem>Resume</NavItem>
        </StyledNavLink>
      </NavWrapper>
    </NavComponent>
  );
};
