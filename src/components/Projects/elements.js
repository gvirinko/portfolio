import styled from "styled-components";

export const ProjectsComponent = styled.section`
  position: relative;
  border-bottom: none;
  padding-bottom: 50px;
  background-color: #f6f1df;
  color: #2f4858;
`;

export const ProjectHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 50px;
  text-align: center;
  font-family: "Roboto Slab", Georgia, serif;
  font-size: 36px;
`;

export const ProjectsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 0px;
`;

export const ProjectLogo = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 2%;
  margin-right: 50px;
  border: 1px solid rgb(193, 202, 183);
  box-shadow: 2px 2px 2px rgb(226, 231, 218);
`;

export const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 50px;
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
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
