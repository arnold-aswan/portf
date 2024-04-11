import web from "@/public/assets/web.png";
import mobile from "@/public/assets/mobile.png";
import backend from "@/public/assets/backend.png";
// import { starbucks } from "@/public/assets/company/starbucks.png";
import starbucks from "@/public/assets/starbucks.png";

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
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Moringa School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Allpack Industries ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
