import styled from "styled-components";

export const ProjectsComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${({ theme }) => theme.spaceBg};
  color: ${({ theme }) => theme.spaceText};
  @media (min-width: 320px) and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 0;
  flex-wrap: no-wrap;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-wrap: wrap;
    margin-left: 30px;
    margin-right: 10px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    // flex-wrap: wrap;
    margin-left: 30px;
    margin-right: 10px;
  }
`;

export const ProjectLogo = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 2%;
  margin-top: 10px;
  margin-right: 50px;
  border: 1px solid rgb(193, 202, 183);
  box-shadow: 2px 2px 2px rgb(226, 231, 218);
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100px;
    margin-right: 30px;
  }
`;

export const ProjectButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 50px;
  @media (min-width: 320px) and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const ProjectButton = styled.button`
  &:hover {
    opacity: 0.7;
  }
  background-color: #42493a;
  border: none;
  border-radius: 5%;
  width: 120px;
  color: #f5fced;
  padding: 15px 32px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

export const ProjectTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
`;

export const ProjectDescription = styled.div`
  text-align: left;
`;
