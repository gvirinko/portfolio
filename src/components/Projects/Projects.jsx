import React from "react";

import {
  ProjectsComponent,
  // ProjectHeader,
  ProjectsWrapper,
  ProjectLogo,
  ProjectInfoWrapper,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
} from "./elements";

export const Projects = ({ content }) => {
  return (
    <ProjectsComponent>
      {content.map((project) => (
        <ProjectsWrapper key={project.title}>
          <ProjectLogo src={project.logo} alt="Logo" />
          <ProjectInfoWrapper>
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
          </ProjectInfoWrapper>
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </div>
        </ProjectsWrapper>
      ))}
    </ProjectsComponent>
  );
};
