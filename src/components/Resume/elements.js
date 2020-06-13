import styled from "styled-components";

export const ResumeComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.spaceBg};
  // color: #2f4858;
  color: ${({ theme }) => theme.spaceText};
`;
