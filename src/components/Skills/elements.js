import styled from "styled-components";

export const SkillsComponent = styled.section`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.spaceBg};
  text-align: center;
  flex: 1;
`;

export const SkillsTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
`;

export const SkillsWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 20px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 90%;
  }
`;

export const Skill = styled.div`
  &:first-of-type {
    margin-top: 50px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 0;
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 20px;
`;

export const SkillLabel = styled.div`
  margin-right: 20px;
  color: ${({ theme }) => theme.spaceText};
`;
