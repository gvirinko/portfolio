import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  NavComponent,
  NavWrapper,
  NavItem,
  StyledNavLink,
  ActiveStyle,
} from "./elements";

export const NavBar = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <NavComponent>
      <NavWrapper>
        <StyledNavLink
          to="/"
          exact
          activeStyle={ActiveStyle(themeContext.headerFooterText)}
        >
          <NavItem>Projects</NavItem>
        </StyledNavLink>
        <StyledNavLink
          to="/resume"
          activeStyle={ActiveStyle(themeContext.headerFooterText)}
        >
          <NavItem>Resume</NavItem>
        </StyledNavLink>
        <StyledNavLink
          to="/skills"
          activeStyle={ActiveStyle(themeContext.headerFooterText)}
        >
          <NavItem>Skills</NavItem>
        </StyledNavLink>
        <StyledNavLink
          to="/commits"
          activeStyle={ActiveStyle(themeContext.headerFooterText)}
        >
          <NavItem>Commits</NavItem>
        </StyledNavLink>
      </NavWrapper>
    </NavComponent>
  );
};
