import honingLogo from "./images/BONUS.png";
import newsLogo from "./images/NewsAnalyzer.png";
import mondrian from "./images/Mondrian.png";
import irynaGnativ from "./images/IMG_6501.jpeg";

export const headerInfo = {
  name: "Iryna Gnativ",
  status: "Learning to Code",
};

export const footerInfo = {
  year: "2020",
};

export const skillsList = [
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

export const projectsList = [
  {
    title: "{This Page}",
    logo: irynaGnativ,
    link: "",
    github: "https://github.com/gvirinko/portfolio",
    description: "This is my training project to practice ReactJS",
  },
  {
    title: "News Analyzer",
    logo: newsLogo,
    link: "https://gvirinko.github.io/news_analyzer/",
    github: "https://github.com/gvirinko/news_analyzer",
    description: "Finds and analyzes news on the given search word",
  },
  {
    title: "Honing",
    logo: honingLogo,
    link: "https://honing.pl/",
    address: "honing.pl",
    github: "https://github.com/honingpl/honingpl.github.io",
    description: "A landing page for my parents' beekeeping business",
  },
  {
    title: "Mondrian",
    logo: mondrian,
    link: "https://gvirinko.github.io/mondrian/",
    github: "https://github.com/gvirinko/mondrian",
    description:
      'A picture of Piet Mondrian “Composition With Red, Yellow, And Blue", “drawn” solely with CSS - Flexbox, just for fun',
  },
];
