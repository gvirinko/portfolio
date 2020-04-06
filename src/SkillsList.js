import React from 'react';

export const skillSet = [
  {
    label: "HTML",
    level: 5
  },
  {
    label: "Css",
    level: 5
  },
  {
    label: "JavaScript",
    level: 3
  },
  {
    label: "React",
    level: 2
  },
  {
    label: "Python",
    level: 1
  }
];

export const SkillsList = ({ children }) => <div className="skills">{children}</div>;