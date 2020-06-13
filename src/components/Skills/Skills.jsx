import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  SkillsComponent,
  SkillsTitle,
  SkillsWrapper,
  Skill,
  SkillLabel,
} from "./elements";

import { SkillsList } from "../SkillsList";
import { ProgressBar } from "../ProgressBar";

export const Skills = ({ content }) => {
  const skills = content;
  const [showSkills, setShowSkills] = useState(false);
  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };
  const themeContext = useContext(ThemeContext);
  console.log(themeContext.showList);
  return (
    <SkillsComponent>
      <SkillsTitle
        style={{
          // color: showSkills ? "#2F4858" : "#005B95",
          color: themeContext.showList,
          cursor: "pointer",
        }}
        onClick={toggleSkills}
      >
        {showSkills
          ? "My skills progress:"
          : "Click here to see my skills progress"}
      </SkillsTitle>
      <SkillsWrapper>
        {showSkills && (
          <SkillsList>
            {skills.map((item) => (
              <Skill key={item.label}>
                <SkillLabel key={item.label}>{item.label}</SkillLabel>
                <ProgressBar level={item.level} />
              </Skill>
            ))}
          </SkillsList>
        )}
      </SkillsWrapper>
    </SkillsComponent>
  );
};
