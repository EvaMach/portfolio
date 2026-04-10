import beeyImg from "../../public/img/beey.webp";
import tolionImg from "../../public/img/tolion.webp";
import beeyLiveImg from "../../public/img/beey-live.webp";
import codeImg from "../../public/img/code.webp";
import mymImg from "../../public/img/mym.webp";
import timeShiftImg from "../../public/img/timeshift.webp";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  client?: string;
  year: string;
  roles: string;
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
    id: "BrainHealthCompanion",
    title: "AI Companion for Brain Health",
    client: "Tolion Health AI",
    year: "2025-now",
    roles: "Fullstack Developer",
    techTags: [
      "React Native",
      "Expo",
      "Python",
      "FastAPI",
      "LLM Integration",
      "Generative UI",
    ],
    techStack: ["React Native", "TypeScript", "Python", "FastAPI"],
    libs: ["Expo", "NativeWind"],
    tools: ["Git", "GitHub", "Figma", "Stitch"],
    shortDescription: [
      "An AI companion for brain health and cognitive longevity, delivering personalized, evidence-based guidance through a conversational mobile experience.",
      "I was the primary full-stack engineer, leading development and UX across the mobile frontend and AI backend.",
    ],
    longDescription: [
      "This project is not yet publicly released, so some implementation details are intentionally kept vague.",
      "The product is an adaptive AI companion in the brain health space — designed to deliver personalized, actionable guidance through a conversational interface.",
      "I led the project's development end-to-end: shaping FE and BE architecture, running UX sessions, integrating LLM capabilities, and building both the React Native frontend and Python backend. I collaborated closely with the project's lead AI engineer, UX, medical and product teams.",
    ],
    contributions: [
      "Led full-stack development and contributed to shaping its architecture and design.",
      "Built a custom generative UI system enabling dynamic interface rendering.",
      "Engineered prompt systems and AI behaviour in collaboration with medical and product teams.",
      "Led UX sessions with designers and stakeholders.",
    ],
    image: tolionImg,
  },
  {
    id: "Beey",
    title: "Beey",
    client: "Newton Technologies",
    year: "2020-2025",
    roles: "Frontend Developer | Dev Team Lead | QA | UX/UI Design",
    techTags: ["React", "TypeScript", "Quill.js", "Ant Design", "Cypress"],
    techStack: ["React", "TypeScript", "JavaScript", "REST API"],
    libs: ["Quill.js", "Ant Design", "CSS Modules", "Jest", "Cypress"],
    tools: ["Git", "GitLab", "GitHub", "Figma", "Notion", "Trello"],
    shortDescription: [
      "AI powered transcription and subtitling platform used by thousands built around a rich-text editor with a media player, associated apps and more.",
      "I grew with the project across five years and four roles: tester, UX/UI responsible, frontend developer, and briefly a dev team lead - ending up where I'm happiest, in the code.",
    ],
    longDescription: [
      "Beey is an AI powered online transcription and subtitling platform used by thousands to transcribe recordings, generate subtitles, translate content, create summaries, and more. What started as a rich-text editor with a media player grew into a robust product with live transcription, a subtitle editor, and an ecosystem of associated apps.",
      "My five years on this project were anything but linear. I came in as the company's first dedicated tester, built out QA processes from scratch, and gradually moved into UX/UI design before settling into frontend development (with a period as a dev team lead along the way). That journey gave me a deep understanding of the product and of how AI features land in production — what the gap between a model's output and a good user experience actually looks like.",
    ],
    contributions: [
      "Optimized editor rendering performance, reducing render time to 1/5 of the original.",
      "Led a major UI redesign end-to-end — from user research and testing through to reshaping the app and defining the new color palette",
      "Designed and delivered a custom white-label UI theme in direct collaboration with clients and their designers.",
      "Drove a full styles refactor introducing CSS variables, theming, and an upgrade to Ant Design 5",
      "Extended the rich-text editor with dynamic, context-aware components to enable more powerful user interactions.",
      "Developed numerous responsive & reusable React components across a complex, long-lived codebase.",
      "Introduced Notion to the dev team and supported its company-wide adoption, improving sprint planning and async communication.",
    ],
    link: "https://editor.beey.io/",
    image: beeyImg,
  },
  {
    id: "BeeyLive",
    title: "Beey Live",
    client: "Newton Technologies",
    year: "2024-2025",
    roles: "Fullstack Developer",
    techTags: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "Socket.io",
      "Ant Design",
    ],
    techStack: ["React", "TypeScript", "Python", "Flask", "REST API"],
    libs: ["Socket.io", "Ant Design", "CSS Modules"],
    tools: ["Git", "GitHub", "Notion", "Trello"],
    shortDescription: [
      "A real-time subtitling app for live conferences — attendees follow along on their phones while a technician configures audio, transcription engines, and translation on the fly.",
      "I inherited a vanilla JS prototype and rebuilt it into a production-ready React application, then expanded into backend work with Python and Flask.",
    ],
    longDescription: [
      "Beey Live is a real-time subtitling app built for live events — picture a conference where attendees follow along on their phones in their own language while a technician configures audio sources, transcription engines, and translation in the background.",
      "I took over the project alone, inheriting a vanilla JS prototype that needed a full rewrite to be production-ready. I rebuilt it in React with Ant Design, then a more senior colleague joined and we extended it further. The project's smaller scale also gave me room to venture into the backend and pickup up Python and Flask hands-on.",
    ],
    contributions: [
      "Rebuilt the app, replacing a fragile prototype with a maintainable React codebase.",
      "Contributed to backend development — building API endpoints and handling database migrations in Python and Flask.",
      "Built responsive, device-friendly components with a focus on usability across devices.",
    ],
    image: beeyLiveImg,
  },
  {
    title: "Beey parser library",
    id: "BeeyTrsx",
    client: "Newton Technologies",
    year: "2025",
    roles: "Sole Developer",
    techTags: ["TypeScript", "Mocha", "Chai", "saxes"],
    techStack: ["TypeScript"],
    libs: ["Mocha", "Chai", "saxes"],
    tools: ["Git", "GitHub"],
    shortDescription: [
      "A standalone npm library for parsing and formatting Beey's proprietary transcription file format — built to replace older, brittle code with something robust and maintainable.",
      "I designed and built this solo, with a focus on clean architecture and comprehensive test coverage using Mocha and Chai.",
    ],
    longDescription: [
      "This parser library was built to replace aging, hard-to-maintain code responsible for extracting transcription and caption data from Beey's proprietary file format. The goal was a standalone, well-tested library that other parts of the system could rely on without surprises.",
    ],
    contributions: [
      "Replaced fragile legacy parsing code with a reliable, well-structured solution.",
      "Wrote comprehensive unit tests covering the full range of the library's functionality.",
      "Improved error handling for more predictable and debuggable data extraction.",
    ],
    image: codeImg,
  },
  {
    id: "TimeShift",
    title: "TimeShift",
    client: "Newton Technologies",
    year: "2023-2025",
    roles: "Frontend Developer",
    techTags: ["React", "TypeScript", "Ant Design", "Shaka Player"],
    techStack: ["React", "TypeScript", "REST API"],
    libs: ["Ant Design", "Shaka Player"],
    tools: ["Git", "GitHub", "Notion"],
    shortDescription: [
      "A platform for recording and monitoring live TV and radio broadcasts, featuring dashboards, a video player, and interactive timelines.",
      "The challenge was to rapidly develop the application from the ground up in a small team under a tight deadline, using a legacy app as our UX reference.",
    ],
    longDescription: [
      "TimeShift is a recording hub for managing large numbers of TV and radio channels. The UI centers on dashboards for monitoring usage, errors, and system health, alongside a large interactive timeline of recorded segments.",
      "I joined at the very start alongside a more senior colleague, and together we built the application from scratch — using the UX of an older, obsolete app as our reference point. Despite a tight deadline, we worked closely with the product team and iterated continuously, getting to production-ready in under a year.",
    ],
    contributions: [
      "Built the application from the ground up alongside one senior colleague, contributing to both UI design and architecture decisions.",
      "Worked on interactive timeline features, including zooming, drag-and-drop, and other dynamic UI elements.",
      "Built React components that communicate with REST API, performed refactorings, and conducted code reviews.",
      "Engaged frequently with the product team and users, iterating on their feedback to improve the app.",
    ],
    image: timeShiftImg,
  },
  {
    title: "Meet Your Mentor",
    id: "MyM",
    year: "2024",
    roles: "Frontend Developer",
    client: "Czechitas",
    techTags: ["Next.js", "React", "TypeScript"],
    techStack: ["Next.js", "React", "TypeScript"],
    libs: [],
    tools: ["Git", "GitHub"],
    shortDescription: [
      "A small open-source project for Czechitas, matching mentors with mentees during their Digital Academy programmes.",
      "I contributed frontend features with a focus on responsiveness and usability, and participated in user testing with mentors.",
    ],
    longDescription: [
      "This small in-house project was developed to facilitate mentor-mentee matching during Czechitas Digital Academies.",
      "I joined the project owner as a contributor tightening up responsiveness and usability.",
    ],
    contributions: [
      "Improved responsiveness and usability across the frontend.",
      "Participated in a testing session with mentors, implemented their feedback and requests",
    ],
    link: "https://mym.czechitas.cz/",
    image: mymImg,
  },
];
