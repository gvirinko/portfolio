import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavComponent = styled.section`
  position: relative;
  // background-color: #b5d491;
  // color: light-grey;
  background-color: ${({ theme }) => theme.headerFooterBg};
  // color: ${({ theme }) => theme.spaceText};
`;

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NavItem = styled.div`
  margin: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.spaceBg};
  border-right: 1px dotted #b5d491;

  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.9;
  }
  text-decoration: none;
  opacity: 0.7;
  color: grey;
`;

export const ActiveStyle = (headerFooterText) => ({
  color: headerFooterText,
  opacity: "1",
  fontWeight: "bold",
  cursor: "default",
});
