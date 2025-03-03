import beeyImg from "../../public/img/beey.webp";
import beeyLive from "../../public/img/beey-live.webp";
import { StaticImageData } from "next/image";

interface Project {
  name: string;
  client?: string;
  year: string;
  roles: string;
  team: string;
  techTags: string[];
  techStack: string[];
  libs: string[];
  tools: string[];
  shortDescription: string[];
  longDescription: string[];
  contributions: string[];
  link?: string;
  image: StaticImageData;
}

export const projects: Project[] = [
  {
    name: "Beey",
    client: "Newton Technologies",
    year: "2020-2025",
    roles: "Frontend Developer | Dev Team Lead | QA | UX/UI Design",
    techTags: ["React", "TypeScript", "Quill.js", "Ant Design", "Cypress"],
    techStack: ["React", "TypeScript", "JavaScript", "Rest API", "Git"],
    libs: ["Quill.js", "Ant Design", "CSS Modules", "Jest", "Cypress"],
    tools: ["GitLab", "GitHub", "Figma", "Notion", "Trello"],
    team: 'Other 2-4 frontend developers, 3-5 backend developers, and 1 tester',
    shortDescription: [
      "AI powered platform centered around rich-text editor with subtitle mode and numerous associated plugins and apps.",
      "I grew together with the project - from testing, through UX/UI design and finally to frontend development with a period in the dev team lead role.",
    ],
    longDescription: [
      "Beey is an AI powered online transcription platform that allows its users transcribe recordings, generate automatic or professional subtitles, create summaries, translate content, and more. I watched the project grow from a small tool centered around a rich-text editor with a media player into a robust platform used by thousands. Over time, it evolved to include numerous plugins and associated app like allowing voice recording, live stream transcription, or a powerful subtitle editor.",
      "I had the unique opportunity to grow alongside this project. Starting as the company's first full-time tester, I was free to establish testing processes and gradually automate some workflows using Cypress. My interest in user experience led me to take on a UI/UX design role before transitioning to frontend development, where I have remained since. For several months, I also served as the development team lead, working closely with the product team, but ultimately returned to hands-on development, where I thrive.",
    ],
    contributions: [
      "Developed numerous responsive & reusable React components communicating via REST API.",
      "Built 2 TS libraries for parsing and burning of subtitles into <canvas/>.",
      "Integrated rich editor features using React, Quill.js and also vanilla TypeScript.",
      "Numerous refactorings big and small, code reviews and bug fixes.",
      "Editor optimization that reduced number of renders and sped up editing.",
      "Designed and implemented a customer-tailored UI theme, collaborating with customer management and designers.",
      "Large refactoring of the code base styles - introducing theming capabilities, CSS variables, and upgrading to Ant Design 5 new design system",
      "App UI redesign - defining the new company color palette.",
      "Created interactive prototypes in Figma, led user testing and interviews.",
      "Optimization of processes - introduced Notion, led its adoption within the dev team, and supported company-wide implementation.",
      "Managed GIT workflows, preparing branches for hotfixes and deployments."
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "BeeyLive",
    client: "Newton Technologies",
    year: "2024-2025",
    roles: "Fullstack Developer",
    techTags: ["React", "TypeScript", "Python", "Flask", "socket.io", "Ant Design"],
    techStack: ["React", "TypeScript", "Python", "Rest API", "Git"],
    libs: ["Flask", "Socket.io", "Ant Design", "CSS Modules"],
    tools: ["GitHub", "Notion", "Trello"],
    team: " 1 other full-stack developer",
    shortDescription: [
      "Responsive multi-use app for live subtitling conferences in different languages with minimal delay.",
      "My initial role was to refactor the existing prototype into production ready version. I mainly contributed to the frontend but also participated in the api design and development.",
    ],
    longDescription: [
      'BeeyLive is an application designed for event preparation and real-time transcription, enabling  live subtitling with minimal delay. Picture a conference where attendees can view live subtitles directly on their phones while a technician set ups the event - hooking up audio, connecting transcription models, and integrating translation engines.',

      "I initially took over this project alone, inheriting a basic vanilla JS prototype that needed a complete rewrite in order to be production ready. Opting for React and Ant Design (commonly used within the company), I restructured the codebase into a maintainable, modern application. Later, a more senior colleague joined, and together we expanded the app’s functionalities. The project's smaller scale also allowed me to explore backend development, where I gained hands-on experience with Python and Flask."
    ],
    contributions: [
      "Rewrote the original prototype, establishing a solid foundation for a production-ready application.",
      "Ventured into backend development, working on API endpoints and database migrations.",
      "Developed responsive React components with emphasis on usability across devices.",
      "Participated in a hackathon, refining the app ahead of a major presentation event."
    ],
    link: "https://beey.com",
    image: beeyLive,
  },
  {
    name: "BeeyTrsx library",
    client: "Newton Technologies",
    year: "2025",
    roles: "Sole Developer",
    techTags: ["TypeScript", "Mocha", "Chai", "saxes"],
    techStack: ["TypeScript"],
    libs: ["Mocha", "Chai", "saxes"],
    tools: ["GitHub"],
    team: "Just me",
    shortDescription: [
      "Utiliy npm package for Beey to parse and format transcription files.",
      "A great project that I got to build on my own from scratch with the main aim to make it robust and reliable. It was a great opportunity to write more unit tests and contribute to the Beey ecosystem.",
    ],
    longDescription: [

    ],
    contributions: [
      "Designed the architecture and implemented the core functionality of the library.",
      "Wrote unit tests to ensure the library's functionality and robustness.",
    ],
    link: "https://beey.com",
    image: beeyLive,
  },
  {
    name: "TimeShift",
    client: "Newton Technologies",
    year: "2023-2025",
    roles: "Frontend Developer",
    techTags: ["React", "TypeScript", "Ant Design", "Shaka Player"],
    techStack: ["React", "TypeScript", "Rest API", "Git"],
    libs: ["Ant Design", "Shaka Player"],
    tools: ["GitHub", "Notion"],
    team: "1 other frontend developer, 1-2 backend developers",
    shortDescription: [
      "Platform to record and overview live TV and radio broadcasts. Including dashboards, video player and timelines.",
      "The challenge in this project was to quickly develop it in from the ground up in a team of 4 developers based on a legacy app behavior.",
    ],
    longDescription: [
      "TimeShift is a recording hub designed to record and manage numerous TV and radio channels. The UI includes dashboards for monitoring data, erros and overall usage, along with a large interactive timeline showacasing recorded segments.",

      "I joined this project alongside a more senior colleague, and together we built the application from the ground up, using the UX of an older, now obsolete app as a foundation. With a tight deadline, we worked closely with the product team, iteratively refining the app until it was production-ready in under a year."
    ],
    contributions: [
      "Co-developed the application in a small team, participating in decisions regarding UI design and app architecture.",
      "Worked on interactive timeline features, including zooming, drag-and-drop, and other dynamic UI elements.",
      "Built React components that communicate with REST API, performed refactorings, and conducted code reviews.",
      "Engaged frequently with the product team and users, iterating on their feedback to improve the app."
    ],
    link: "https://beey.com",
    image: beeyImg,
  },
  {
    name: "Meet Your Mentor",
    year: "2024",
    roles: "Frontend Developer",
    client: "Czechitas",
    techTags: ["Next.JS", "React", "TypeScript"],
    techStack: ["Next.JS", "React", "TypeScript"],
    libs: [],
    tools: ["GitHub"],
    team: "1 other full-stack developer",
    shortDescription: [
      "A small project for Czechitas to facilite pairing of mentors with mentees.",
      "I contributed  several features, primarily focusing on styling to enhance responsiveness and usability.",
    ],
    longDescription: [
      "This small in-house project was developed to facilitate mentor-mentee matching during Czechitas Digital Academies.",

      "I joined the project owner and contributed  several features, primarily focusing on styling to enhance responsiveness and usability."
    ],
    contributions: [
      "Conducted user testing and communicated with users, and implemented their feedback and requests"
    ],
    link: "https://beey.com",
    image: beeyImg,
  }
];