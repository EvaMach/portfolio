import beeyImg from "@/lib/img/beey.png";
import { StaticImageData } from "next/image";

interface Project {
  name: string;
  year: string;
  roles: string;
  techStack: string[];
  description: string[];
  link?: string;
  image: StaticImageData;
}

export const projects: Project[] = [
  {
    name: "Beey",
    year: "2020-2025",
    roles: "Frontend Developer | Dev Team Lead | QA | UX/UI Design",
    techStack: ["React", "TypeScript", "Quill.js", "Ant Design", "Cypress"],
    description: [
      "AI powered platform centered around rich-text editor with subtitle mode and numerous associated plugins and apps.",
      "I grew together with the project - from testing, through UX/UI design and finally to frontend development with a period in the dev team lead role.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "BeeyLive",
    year: "2024-2025",
    roles: "Fullstack Developer",
    techStack: ["React", "TypeScript", "Python", "Flask", "Ant Design"],
    description: [
      "Responsive multi-use app for live subtitling conferences in different languages with minimal delay.",
      "My initial role was to refactor the existing prototype into production ready version. I mainly contributed to the frontend but also participated in the api design and development.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "BeeyTrsx library",
    year: "2025",
    roles: "Sole Developer",
    techStack: ["TypeScript", "Mocha", "Chai", "xml-tools"],
    description: [
      "Utiliy npm package for Beey to parse and format transcription files.",
      "A great project that I got to build on my own from scratch with the main aim to make it robust and reliable. It was a great opportunity to write more unit tests and contribute to the Beey ecosystem.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "TimeShift",
    year: "2023-2025",
    roles: "Frontend Developer",
    techStack: ["React", "TypeScript", "Ant Design", "Shaka Player"],
    description: [
      "Platform to record and overview live TV and radio broadcasts. Including dashboards, video player and timelines.",
      "The challenge in this project was to quickly develop it in from the ground up in a team of 4 developers based on a legacy app behavior.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "Meet Your Mentor",
    year: "2024",
    roles: "Frontend Developer",
    techStack: ["Next.JS", "React", "TypeScript"],
    description: [
      "Small project for Czechitas to facilite pairing of mentors with mentees.",
      "I contributed  several features, primarily focusing on styling to enhance responsiveness and usability.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  }
];