"use client";

import { projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";
import { useInView } from "@/hooks/useInView";
import { workContent } from "@/lib/content";

const Work = () => {
  const headerRef = useInView();

  return (
    <section id="work" className="px-5 sm:px-10 md:px-[15%] py-20 scroll-mt-24">
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="animate-fade-up mb-12"
      >
        <div className="section-label">{workContent.sectionLabel}</div>
        <h2 className="font-extrabold mb-3 text-text-primary text-[clamp(1.75rem,3vw,2.5rem)]">
          {workContent.heading}
        </h2>
        <p className="text-text-secondary text-lg">{workContent.description}</p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
