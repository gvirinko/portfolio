import React from 'react';

const skillSet = [
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

  const Skills = ({ children }) => <div className="skills">{children}</div>;

export default Skills;
