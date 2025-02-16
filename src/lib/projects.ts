interface Project {
  name: string;
  year: string;
  roles: string;
  stack: string;
  libraries: string;
  description: string;
  link?: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Beey",
    year: "2020-2025",
    description: 'cool',
    roles: "Frontend Developer, Team Lead, Manual and automation tester, UX/UI Designer",
    stack: "React, TypeScript, JavaScript, Rest API, Git",
    libraries: "AntDesign, CSS Modules, Quill JS, Jest, Cypress",
    image: "/project1.jpg",
  }];