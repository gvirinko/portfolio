import React from "react";
import { DuckModeContext } from "../DuckModeContext/DuckModeContext";

import {
  ProjectsComponent,
  ProjectWrapper,
  ProjectLogo,
  ProjectButtonsWrapper,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
} from "./elements";
import duck from "../../images/duck.jpg";
import irynaGnativ from "../../images/IMG_6501.jpeg";

export const Projects = ({ content }) => {
  const { isDuckModeOn } = React.useContext(DuckModeContext);
  isDuckModeOn ? (content[0].logo = duck) : (content[0].logo = irynaGnativ);

  return (
    <ProjectsComponent>
      {content.map((project) => (
        <ProjectWrapper key={project.title}>
          <ProjectLogo src={project.logo} alt="Logo" />
          <ProjectButtonsWrapper>
            <ProjectButton onClick={() => window.open(project.github)}>
              GitHub
            </ProjectButton>

            {project.link ? (
              <ProjectButton onClick={() => window.open(project.link)}>
                Website
              </ProjectButton>
            ) : (
              ""
            )}
          </ProjectButtonsWrapper>
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </ProjectDescription>
          </div>
        </ProjectWrapper>
      ))}
    </ProjectsComponent>
  );
};
