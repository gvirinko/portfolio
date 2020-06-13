import styled from "styled-components";

export const ToggleComponent = styled.div`
  background-color: ${({ theme }) => theme.headerFooterBg};
  // width: 100%;
`;
export const Toggle = styled.button`
  &:hover {
    opacity: 0.7;
  }
  background-color: ${({ theme }) => theme.headerFooterText};
  color: ${({ theme }) => theme.headerFooterBg};
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  border-radius: 5%;
`;
