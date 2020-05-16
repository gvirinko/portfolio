import styled from "styled-components";

export const SkillsComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f6f1df;
  text-align: center;
`;

export const SkillsTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
`;

export const SkillsWrapper = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 20px;
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
`;
