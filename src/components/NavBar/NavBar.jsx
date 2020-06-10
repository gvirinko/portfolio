import React from "react";

import {
  NavComponent,
  NavWrapper,
  NavItem,
  StyledNavLink,
  ActiveStyle,
} from "./elements";

export const NavBar = () => {
  return (
    <NavComponent>
      <NavWrapper>
        <StyledNavLink to="/" exact activeStyle={ActiveStyle}>
          <NavItem>Projects</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/resume" activeStyle={ActiveStyle}>
          <NavItem>Resume</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/skills" activeStyle={ActiveStyle}>
          <NavItem>Skills</NavItem>
        </StyledNavLink>
        <StyledNavLink to="/commits" activeStyle={ActiveStyle}>
          <NavItem>Commits</NavItem>
        </StyledNavLink>
      </NavWrapper>
    </NavComponent>
  );
};
