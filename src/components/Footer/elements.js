import styled from "styled-components";

export const FooterComponent = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.headerFooterBg};
  color: ${({ theme }) => theme.headerFooterText};
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
