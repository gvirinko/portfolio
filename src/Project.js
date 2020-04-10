import React from 'react';
// import {SkillsList, skillSet} from './SkillsList';

const projectSet = [
    {
        title: "Honing",
        logo: "url",
        link: "url",
        github: "url",
        description: "My pet project"
    },
    {
        title: "News Analyzer",
        logo: "url",
        link: "url",
        github: "url",
        description: "Finds and analyzes news on the given search word"
    },
    {
        title: "Mondrian",
        logo: "url",
        link: "url",
        github: "url",
        description: "A picture of Piet Mondrian “Composition With Red, Yellow, And Blue\", \“drawn\” solely with CSS-Flexbox"
    }
];

// This section is in progress
const Projects = () => {
    return (
        projectSet.map(item => (
            <div className="project" key={item.title}>
                <h2 className="project__title">{item.title}</h2>
                <img src={item.logo} />
                <a href={item.link}>Link to project</a>
                <a href={item.github}>Link to the project GitHub</a>
                <p>{item.description}</p>
            </div>
        ))
    )
};

export default Projects;
