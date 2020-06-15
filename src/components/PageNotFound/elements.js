import styled from "styled-components";

export const PageNotFoundComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.spaceBg};
  color: ${({ theme }) => theme.spaceText};
`;

export const Text = styled.p`
  margin-top: 0;
  padding-top: 50px;
  text-align: center;
`;
