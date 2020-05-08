import React from "react";

import {
  ProjectsComponent,
  ProjectsWrapper,
  ProjectLogo,
  ProjectInfoWrapper,
  ProjectButton,
  ProjectTitle,
  ProjectDescription,
} from "./elements";

// This section is in progress
export const Projects = ({ content }) => {
  function sayHello() {
    // console.log("Hello!");
  }

  return content.map((item) => (
    <ProjectsComponent key={item.title}>
      <ProjectsWrapper>
        <ProjectLogo src={item.logo} alt="Logo" />
        <ProjectInfoWrapper>
          <ProjectButton
            onclick={sayHello()}
            // value="Go to Google"
          >
            Website
            {/* <a href={item.link}>Website</a> */}
          </ProjectButton>
          <ProjectButton>GitHub</ProjectButton>
          {/* <a href={item.github}>GitHub</a> */}
        </ProjectInfoWrapper>
        <div>
          <ProjectTitle>{item.title}</ProjectTitle>
          <ProjectDescription>{item.description}</ProjectDescription>
        </div>
      </ProjectsWrapper>
    </ProjectsComponent>
  ));
};
