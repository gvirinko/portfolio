import React from "react";

import honingLogo from "../../images/BONUS.png";
import newsLogo from "../../images/NewsAnalyzer.png";
import mondrian from "../../images/Mondrian.png";

const projectSet = [
  {
    title: "Honing",
    logo: honingLogo,
    link: "https://honing.pl/",
    address: "honing.pl",
    github: "https://github.com/honingpl/honingpl.github.io",
    description: "A landing page for my parents' beekeeping business",
  },
  {
    title: "News Analyzer",
    logo: newsLogo,
    link: "https://gvirinko.github.io/news_analyzer/",
    github: "https://github.com/gvirinko/news_analyzer",
    description: "Finds and analyzes news on the given search word",
  },
  {
    title: "Mondrian",
    logo: mondrian,
    link: "url",
    github: "https://github.com/gvirinko/mondrian",
    description:
      'A picture of Piet Mondrian “Composition With Red, Yellow, And Blue", “drawn” solely with CSS-Flexbox',
  },
];

// This section is in progress
export const Projects = () => {
  return projectSet.map((item) => (
    <div className="project" key={item.title}>
      <div className="project__wrapper">
        <img className="project__logo" src={item.logo} alt="Logo" />
        <div className="project__info-wrapper">
          <button className="project__button">
            Website
            {/* <a href={item.link}>Website</a> */}
          </button>
          <button className="project__button">GitHub</button>
          {/* <a href={item.github}>GitHub</a> */}
        </div>
        <div className="project__description-wrapper">
          <h2 className="project__title">{item.title}</h2>
          <div className="project__description">{item.description}</div>
        </div>
      </div>
    </div>
  ));
};

// export default Projects;
