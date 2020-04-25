import honingLogo from "./images/BONUS.png";
import newsLogo from "./images/NewsAnalyzer.png";
import mondrian from "./images/Mondrian.png";

export const headerInfo = {
  name: "Iryna Gnativ",
  status: "Learning to Code",
};

export const footerInfo = {
  year: "2019",
};

export const skillSet = [
  {
    label: "HTML",
    level: 5,
  },
  {
    label: "CSS",
    level: 5,
  },
  {
    label: "JavaScript",
    level: 3,
  },
  {
    label: "ReactJS",
    level: 2,
  },
  {
    label: "Python",
    level: 1,
  },
  {
    label: "ProcrastinateJS",
    level: 8,
  },
];

export const projectSet = [
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
