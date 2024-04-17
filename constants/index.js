import web from "@/public/assets/web.png";
import mobile from "@/public/assets/mobile.png";
import backend from "@/public/assets/backend.png";

import { allpack, moringa, tecktick } from "@/public/assets/company";
import { carhub, hilink, projectMgr, netflix } from "@/public/assets/projects";
import {
  css,
  git,
  html,
  javascript,
  react,
  redux,
  tailwind,
  typescript,
  python,
} from "@/public/assets/tech";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "TeckTick",
    icon: tecktick,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",

    points: [
      "Implementing scalable React components, ensuring adherence to project requirements and industry best practices.",
      "Utilizing front-end libraries such as Material UI and other UI libraries to improve the user interface and provide an intuitive user experience.",
      "Collaborating closely with team members using Git and GitHub for version control and collaborative development.",
      "Participating actively in code reviews to maintain code quality.",
      "Build reusable code and libraries for future use, optimizing applications for maximum speed and scalability.",
      "Designing and implementing database schemas, ensuring data integrity and efficient query performance.",
      "Developing RESTful APIs and backend services using technologies such as Django and Postgresql.",
      "Integrating frontend components with backend services, ensuring seamless data flow and application functionality.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Moringa School",
    icon: moringa,
    iconBg: "#383E56",
    date: "May 2023 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Integrating frontend components with backend services, ensuring seamless data flow and application functionality.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Allpack Industries ltd",
    icon: allpack,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      "Provided comprehensive technical support for computer operations, including troubleshooting and issue resolution.",
      " Installed, modified, and repaired both software and hardware to address technical issues.",
      " Offered expertise in problem resolution, suggesting patches and troubleshooting alternatives for hardware, software, and network-related issues.",
      " Supported IT department in technology rollout and maintenance projects.",
      " Contributed assessments to team-based IT projects.",
      " Managed e-invoicing and archiving processes.",
      " Provided remote or on-site support for management teams as required.",
      " Assisted other departments as needed.",
      " Prepared comprehensive ICT Documentation and reports.",
    ],
  },
];

export const projects = [
  {
    name: "Car Hub",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/arnold-aswan/car-showcase",

    demoUrl: "https://car-showcase-theta-seven.vercel.app/",
  },
  {
    name: "Hilink Travel",
    description:
      "A travel Web application landing page that is built with NextJs, Tailwind CSS and Typescript.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hilink,
    source_code_link: "https://github.com/arnold-aswan/travel-ui-ux",
    demoUrl: "https://travel-ui-ux-olive.vercel.app/",
  },
  {
    name: "Netflix",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/arnold-aswan/netflix_clone",
    demoUrl: "https://netflix-clone-azure-mu.vercel.app/",
  },
  {
    name: "Project Manager",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React Vite",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: projectMgr,
    source_code_link:
      "https://github.com/arnold-aswan/project-tracker-frontend",
    demoUrl: "https://project-tracker-frontend-six.vercel.app/",
  },
];

export const technologies = [
  { name: "css", icon: css },
  { name: "git", icon: git },
  { name: "html", icon: html },
  { name: "javascript", icon: javascript },
  { name: "react", icon: react },
  { name: "redux", icon: redux },
  { name: "tailwind", icon: tailwind },
  { name: "typescript", icon: typescript },
  { name: "python", icon: python },
];
