import {
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  swift,
  cashaam,
  illuminet,
  detester,
  library,
  caddell,
  digital,
  orie,
  musicapp,
  movieapp,
  marvel,
  china,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Swift",
    icon: swift,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Cashaam",
    icon: cashaam,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Implementing the user interface of new marketing features for the app, using React Native and TypeScript, enabling users to gain marketing insights for better business awareness.",
      "Developing the functionality to allow users to edit the captions of AI-generated post ideas to align with their business",
      "Creating features that enable users to upload images from their phone or phone camera for the post ideas",
      "Assisting in developing an Ask AI chat functionality for the app, allowing users to ask Cashaam’s AI any questions regarding social media content",
      "Developing and designing React components, like a dropdown menu, for reuse throughout the app",
      "Executed mini projects like fetching information from Cashaam’s API for a website using React.js",
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "illumiNET Media",
    icon: illuminet,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Researched and developed YouthSi's brand and social media policy.",
      "Managed YouthSI's Instragram Account.",
      "Wrote blogs about events teens and young adults can attend in Staten Island.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Detester Magazine",
    icon: detester,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Assisted in designing and developing a new modernized website for the organization using Vue.js",
      "Collaborated on a project page to showcase Detester’s past and current projects",
    ],
  },
];

const extracurriculars = [
  {
    title: "Member",
    club_name: "Digital Humanities",
    icon: digital,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Collaborating in a team to develop a Python-based chatbot, with a personality, to provide campus information to Cornell students",
      "Designing a playable Cornell where different buildings on campus would have an unique personality",
    ],
  },
  {
    title: "Researcher",
    club_name: "Cornell Engineering ORIE Department",
    icon: orie,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Conducted research in a team on optimization algorithms like maximum non-bipartite matching and kidney swap algorithms to optimize dorm swaps at Cornell",
    ],
  },
];

const projects = [
  {
    name: "WatcherList",
    description:
      "App-based platform that allows users to browse trending movies or TV shows.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Github",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/vivianzhou1288/movie-app",
  },
  {
    name: "Music App",
    description:
      "App-based platform that allows Cornell users to play and upload music made by Cornell students.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: musicapp,
    source_code_link: "https://github.com/armita-jamshidi/music_app",
  },
  {
    name: "China",
    description:
      "Cultural web application on China. The website displays different aspects of China's culture such as the cuisine, tourist attractions, and traditions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: china,
    source_code_link:
      "https://github.com/vivianzhou1288/design-scaffold-project-choice-vivkenda",
  },
];

export { technologies, experiences, extracurriculars, projects };
