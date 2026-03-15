import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";
import { projectDetailContent } from "@/lib/content";

interface Props {
  project: Project;
}

const ProjectHeader = ({ project }: Props) => (
  <div className="relative px-5 sm:px-10 md:px-[15%] pt-10 pb-8">
    <Link
      href="/#work"
      className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors duration-200 text-text-secondary hover:text-accent-primary"
    >
      <ArrowLeft size={15} />
      {projectDetailContent.backLabel}
    </Link>

    <div className="max-w-2xl">
      <h1
        className="font-extrabold mb-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1]"
      >
        {project.title}
      </h1>
      <p className="mb-5 text-lg text-text-secondary">
        {project.shortDescription[0]}
      </p>

      {project.link && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03] mb-5 bg-accent-primary text-bg-primary"
        >
          {projectDetailContent.visitSite}
          <ExternalLink size={14} />
        </Link>
      )}
    </div>
  </div>
);

export default ProjectHeader;
