import honingLogo from "./images/BONUS.png";
import newsLogo from "./images/NewsAnalyzer.png";
import mondrian from "./images/Mondrian.png";
import irynaGnativ from "./images/IMG_6501.jpeg";
import logoRestaurants from "./images/logoRestaurants.png";

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
    level: 7,
  },
  {
    label: "CSS",
    level: 7,
  },
  {
    label: "JavaScript",
    level: 5,
  },
  {
    label: "ReactJS",
    level: 5,
  },
  {
    label: "Redux",
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
    description: [
      "The page shows my current state of web-development progress.",
      "Tech Stack: HTML, CSS (styled-components), React JS, GIT.",
      "Features: Dark Mode with Context API, fetching data from GitHub API, conditional rendering of skills.",
    ],
  },
  {
    title: "Restaurants Finder",
    logo: logoRestaurants,
    link: "https://priceless-galileo-680738.netlify.app",
    github: "https://github.com/atranarta/redi-restaurants-finder",
    description: [
      "Team project. The app helps to find and filter restaurants based on different requests. For example, to find a middle-range Italian restaurant that is open now and also serves lactose-free dishes.",
      "Tech Stack: HTML, SCSS, React JS, GIT, Redux.",
      "Features: fetching data from mock API, filtering, dynamic routing, adding an Open Layers map.",
    ],
  },
  {
    title: "News Analyzer",
    logo: newsLogo,
    link: "https://gvirinko.github.io/news_analyzer/",
    github: "https://github.com/gvirinko/news_analyzer",
    description: [
      "The service defines how popular is the news on the given topic.",
      "Data is fetched from NewsAPI, saved to localStorage and then analyzed (number of mentions etc).",
      "Tech stack: HTML, CSS, JavaScript, GIT, Webpack.",
      "Features: BEM methodology, a slider to display my GitHub commits to this project, webpack hashing, site is fully adaptive and responsive, images optimized.",
    ],
  },
  {
    title: "Honing",
    logo: honingLogo,
    link: "https://honing.pl/",
    address: "honing.pl",
    github: "https://github.com/honingpl/honingpl.github.io",
    description: [
      "A landing page for my parents' beekeeping business.",
      "Currently, there is only contacts page. Waiting for the specification :).",
    ],
  },
  {
    title: "Mondrian",
    logo: mondrian,
    link: "https://gvirinko.github.io/mondrian/",
    github: "https://github.com/gvirinko/mondrian",
    description: [
      'A picture of Piet Mondrian “Composition With Red, Yellow, And Blue", “drawn” solely with CSS (Flexbox), just for fun.',
    ],
  },
];
