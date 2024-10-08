import {
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  swift,
  nodejs,
  express,
  mongodb,
  cashaam,
  detester,
  headstarter,
  webdev,
  orie,
  travelmedia,
  wizlet,
  sportly,
  bot,
  movieapp,
  musicapp,
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
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    company_name: "Workhelio",
    icon: "https://cdn-icons-png.flaticon.com/512/2083/2083417.png",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing conversational interfaces using Dialog CX and Gemini AI for better conversational flows",
      "Assisting in the development of the startup’s product using React.js",
      "Building the user experience for users to ask questions in English, which are then processed by an AI to generate SQL code",
      "Developing a Query Assistant Chrome extension, using React.js, enabling users to ask the AI questions and receive generated SQL queries to help them with their database search",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Cashaam",
    icon: cashaam,
    iconBg: "#E6DEDD",
    date: "July 2023 - Oct 2023",
    points: [
      "Implementing the user interface of new marketing features for the app, using React Native and TypeScript, enabling users to gain marketing insights for better business awareness",
      "Developing the functionality to allow users to edit the captions of AI-generated post ideas to align with their business",
      "Creating features that enable users to upload images from their phone or phone camera for the post ideas",
      "Assisting in developing an Ask AI chat functionality for the app, allowing users to ask Cashaam’s AI any questions regarding social media content",
      "Trained AI models to generate better creative Instagram captions for products based on user-uploaded images on Cashaam’s app",
      // "Developing and designing React components, like a dropdown menu, for reuse throughout the app",
      // "Executed mini projects like fetching information from Cashaam’s API for a website using React.js",
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
    title: "Software Engineering Fellow",
    club_name: "Headstarter",
    icon: headstarter,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developing 5+ AI applications using NextJS, OpenAI, and StripeAPI",
    ],
  },
  {
    title: "Developer/Member",
    club_name: "Cornell webdev",
    icon: webdev,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Collaborating in a team to create a web application that allows Cornell students to sell school supplies that are no longer needed, using React.js and Express.js",
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
    name: "Travel Media",
    description:
      "Web-based application that allows users to upload posts about places they traveled to.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: travelmedia,
    source_code_link: "https://github.com/vivianzhou1288/travel_media",
  },
  {
    name: "Wizlet",
    description:
      "Web-based application that generates flashcard sets base on user's queries.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "StripeAPI",
        color: "pink-text-gradient",
      },
    ],
    image: wizlet,
    link: "https://wizlet.vercel.app/",
    source_code_link: "https://github.com/sylaschacko/flashcards",
  },
  {
    name: "Sportly",
    description:
      "Web-based application that that scrapes athlete statistics an user-provided URL.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: sportly,
    link: "https://sportsdatascraper.vercel.app/",
    source_code_link: "https://github.com/vivianzhou1288/sportsdatascraper",
  },
  {
    name: "Travel Assistant Bot",
    description:
      "Web-based application that provides travel assistance to users utilizing a bot.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "OpenRouter API",
        color: "pink-text-gradient",
      },
    ],
    image: bot,
    link: "https://travelassistantbot.vercel.app/",
    source_code_link: "https://github.com/vivianzhou1288/ai-customer-support",
  },
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
  // {
  //   name: "China",
  //   description:
  //     "Cultural web application on China. The website displays different aspects of China's culture such as the cuisine, tourist attractions, and traditions.",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: china,
  //   source_code_link:
  //     "https://github.com/vivianzhou1288/design-scaffold-project-choice-vivkenda",
  // },
];

export { technologies, experiences, extracurriculars, projects };
