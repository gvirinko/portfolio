import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavComponent = styled.section`
  position: relative;
  background-color: #b5d491;
  // color: #2f4858;
  color: light-grey;
`;

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NavItem = styled.div`
  &:hover {
    opacity: 0.9;
  }
  margin: auto;
  padding: 20px;
  background-color: #f6f1df;
  border: none;

  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  opacity: 0.8;
  color: grey;
`;
