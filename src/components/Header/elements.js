import styled from "styled-components";

export const HeaderComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.headerFooterBg};
  color: ${({ theme }) => theme.headerFooterText};
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  align-items: flex-start;
`;

export const HeaderName = styled.h1`
  margin-top: 50px;
  margin-bottom: 0;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 60px;
`;

export const HeaderStatus = styled.h2`
  margin-top: 0;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

export const HeaderSocial = styled.div`
  height: 50px;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  height: 100%;
  margin-right: 10px;
  filter: ${({ theme }) => theme.filter};
`;
