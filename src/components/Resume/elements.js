import styled from "styled-components";

export const ResumeComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.spaceBg};
  color: ${({ theme }) => theme.spaceText};
  flex: 1;
`;
