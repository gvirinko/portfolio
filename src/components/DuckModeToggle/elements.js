import styled from "styled-components";

export const ToggleComponent = styled.div`
  background-color: ${({ theme }) => theme.headerFooterBg};
`;
export const Toggle = styled.button`
  &:hover {
    opacity: 0.7;
  }
  width: 90px;
  background-color: ${({ theme }) => theme.headerFooterText};
  color: ${({ theme }) => theme.headerFooterBg};
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  border-radius: 5%;
`;
