import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { projectDetailContent } from "@/lib/content";

interface Props {
  prevProject: Project | null;
  nextProject: Project | null;
}

const ProjectNavigation = ({ prevProject, nextProject }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border-subtle">
    {prevProject ? (
      <Link
        href={`/${prevProject.id}`}
        className="flex flex-col gap-1 px-5 sm:px-10 md:px-[10%] py-10 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--bg-secondary)_50%,transparent)] border-r border-border-subtle"
      >
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
          <ArrowLeft size={13} /> {projectDetailContent.previousLabel}
        </span>
        <span className="font-bold text-lg text-text-primary">
          {prevProject.title}
        </span>
      </Link>
    ) : (
      <div />
    )}
    {nextProject ? (
      <Link
        href={`/${nextProject.id}`}
        className="flex flex-col items-end gap-1 px-5 sm:px-10 md:px-[10%] py-10 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--bg-secondary)_50%,transparent)]"
      >
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
          {projectDetailContent.nextLabel} <ArrowRight size={13} />
        </span>
        <span className="font-bold text-lg text-text-primary">
          {nextProject.title}
        </span>
      </Link>
    ) : (
      <div />
    )}
  </div>
);

export default ProjectNavigation;
