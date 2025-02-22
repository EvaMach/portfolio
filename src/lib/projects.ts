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
    roles: "Frontend Developer",
    techStack: ["React", "TypeScript", "JavaScript", "Quill.js", "Ant Design"],
    description: [
      "AI powered platform centered around rich-text editor with subtitle mode and numerous associated plugins and apps.",
      "I grew together with the project - from testing, through UX/UI design and finally to frontend development with a period in the dev team lead role.",
    ],
    link: "https://beey.com",
    image: beeyImg,
  }
];