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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Assisted in designing and developing a new and modernized website for the organization",
      "Developed and maintained web applications using Vue.js",
    ],
  },
  {
    title: "Technology Intern",
    company_name: "Brooklyn Public Library",
    icon: library,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Jun 2022",
    points: [
      "Participated in workshops relating to programming and Google suite applications",
      "Arranged vitual technology programs for the public to utilized",
    ],
  },
  {
    title: "Junior Web Developer Intern",
    company_name: "Caddell Prep",
    icon: caddell,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Jun 2022",
    points: [
      "Created practice SAT questions and explanations on how to complete them for a new tutoring program",
      "Updated the website, using HTML and Wordpress, with homework and quizzes for students to complete",
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
      "Creating a chat bot for Cornell students to use to obtain information about the campus",
      "Designing a playable Cornell where different buildings on campus would have an unique personality",
    ],
  },
  {
    title: "Researcher",
    club_name: "Cornell Engineering ORIE Department",
    icon: orie,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Researched optimization algorithms like the stable roommate problem, kidney exchange algorithms, and maximum non-bipartite matching",
      "Optimizing dorm swapping at Cornell",
    ],
  },
];

const projects = [
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
  {
    name: "Marvel FunkoPop",
    description:
      "Web application for Marvel FunkoPops. A fun project create during a computer science class in high school. Users are able to add different Marvel FunkoPops into a shopping cart.",
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
    image: marvel,
    source_code_link: "https://github.com/vivianzhou1288/shoppingcart-",
  },
];

export { technologies, experiences, extracurriculars, projects };
