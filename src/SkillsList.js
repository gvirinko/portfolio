import React from 'react';

export const skillSet = [
  {
    label: "HTML",
    level: 5
  },
  {
    label: "CSS",
    level: 5
  },
  {
    label: "JavaScript",
    level: 3
  },
  {
    label: "ReactJS",
    level: 2
  },
  {
    label: "Python",
    level: 1
  },
  {
    label: "ProcrastinateJS",
    level: 8
  }
];

export const SkillsList = ({ children }) => <div className="skills">{children}</div>;