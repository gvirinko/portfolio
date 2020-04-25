import React from "react";

import {
  SkillsComponent,
  SkillsTitle,
  SkillsWrapper,
  Skill,
  SkillLabel,
} from "./elements";

import { skillSet } from "../../content";
import { SkillsList } from "../SkillsList/SkillsList";
import ProgressBar from "../ProgressBar/ProgressBar";

export class Skills extends React.Component {
  state = {
    skills: skillSet,
    showSkills: false,
  };

  toggleSkills = () => {
    this.setState((state) => ({ showSkills: !state.showSkills }));
  };

  render() {
    return (
      <SkillsComponent>
        <SkillsTitle
          style={{
            color: this.state.showSkills ? "#2F4858" : "#005B95",
            cursor: "pointer",
          }}
          onClick={this.toggleSkills}
        >
          {this.state.showSkills
            ? "My skills progress:"
            : "Click to see my skills progress"}
        </SkillsTitle>
        <SkillsWrapper>
          {this.state.showSkills && (
            <SkillsList>
              {this.state.skills.map((item) => (
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
  }
}