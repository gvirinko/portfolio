import React from "react";

import {
  ProjectsComponent,
  ProjectWrapper,
  ProjectLogo,
  ProjectButtonsWrapper,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
} from "./elements";

export const Projects = ({ content }) => {
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
