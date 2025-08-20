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
  foodtastic,
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
    company_name: "AIG",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AIG_new_logo.svg/1200px-AIG_new_logo.svg.png",
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Integrated Splunk Real User Monitoring (RUM) into 2+ legacy Java and Spring applications using the singleton design pattern in an Agile environment, improving issue traceability and reducing developer troubleshooting time",
      "Programmed Python scripts to transform OpenSearch JSON data into CSV reports, enabling trend analysis and data-driven decisions across 50+ teams; gained exposure to CI/CD pipelines through AWS services like Lambda for pipeline triggers",
      "Built an automation workflow using Power Automate to trigger real-time Power BI dashboard refreshes upon new SharePoint data uploads, eliminating manual updates by up to 90%",
      "Collaborated on an automated SQL query solution reducing compliance screening time from 30-60 minutes to 5 minutes",
      "Guided 5 new developers on Spring application setup and presented technical walkthroughs on Splunk RUM implementation",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Workhelio",
    icon: "https://cdn-icons-png.flaticon.com/512/2083/2083417.png",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Designed and developed the user experience of a Query Assistant Chrome extension, using React.js, that reduces SQL query creation time for database search from hours to minutes, attracting around 40 weekly users ",
      "Connected front-end components with back-end APIs to display the AI-generated SQL queries in response to user queries",
      "Analyzed user metrics with Google Analytics and implemented 8 feature enhancements based on user feedback",
      "Developing a Query Assistant Chrome extension, using React.js, enabling users to ask the AI questions and receive generated SQL queries to help them with their database search",
      "Conducted functionality testing on the extension by evaluating each feature for proper operation",
      "Developed conversational interfaces using Dialog CX and Gemini AI for better conversational flows",
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
      "Trained and fine-tuned AI models using Google Cloud Vertex AI with prompt engineering techniques, increasing caption generation accuracy by 60% for user-uploaded product images",
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
    title: "Teaching Assistant",
    club_name: "Cornell Bowers CIS",
    icon: webdev,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Facilitate weekly office hours and discussion section of 30+ students, providing guidance on course material and assignments in a computer system organization and programming class",
      "Refine assignment writeups and upgraded autograders to enhance clarity and ensure better student understanding",
    ],
  },
  {
    title: "Project Coordinator, Backend Developer",
    club_name: "Cornell webdev",
    icon: webdev,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Co-lead a team of developers to build a web platform that helps the local community discover beauty services nearby",
      "Build a Next.js web app for Cornell students to buy/sell used items, collaborating with a designer and frontend developer",
      "Exploring Apache Spark MLlib to build predictive models that enhance project functionality and user experience",
    ],
  },
  {
    title: "Software Engineering Fellow",
    club_name: "Headstarter",
    icon: headstarter,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sept 2024",
    points: [
      "Engineered over five AI-driven applications, in a team of four, using Next.js, OpenAI, AWS/Vercel, Firebase, Stripe API, and Pinecone, with a capstone project that had a goal of 1,000 waitlist sign-ups, 1,000 users, or $1,000 in revenue",
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
    name: "D.N.M.",
    description:
      "Web-based application that recommends food and drink pairings based on a user-inputted movie, matching recipes to a movie’s vibe or ingredients mentioned in its script.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "SciPy",
        color: "pink-text-gradient",
      },
    ],
    image: foodtastic,
    link: "http://4300showcase.infosci.cornell.edu:5221/",
    source_code_link:
      "https://github.com/selinalin116/4300-Flask-Template-JSON",
  },
  // {
  //   name: "Travel Media",
  //   description:
  //     "Web-based application that allows users to upload posts about places they traveled to.",
  //   tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Express",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: travelmedia,
  //   source_code_link: "https://github.com/vivianzhou1288/travel_media",
  // },
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
