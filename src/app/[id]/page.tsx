import { projects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectDetailContent } from "@/lib/content";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectMetaSidebar from "@/components/ProjectMetaSidebar";
import ProjectContributions from "@/components/ProjectContributions";
import ProjectTechStack from "@/components/ProjectTechStack";
import ProjectNavigation from "@/components/ProjectNavigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="text-text-primary">
      <ProjectHeader project={project} />

      <div className="border-t border-border-subtle" />

      <div className="px-5 sm:px-10 md:px-[15%] py-12">
        <div className="section-label">{projectDetailContent.overviewLabel}</div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mt-4">
          <div className="space-y-4">
            {project.longDescription.map((para, i) => (
              <p
                key={i}
                className="text-text-secondary leading-[1.75] text-[1.05rem]"
              >
                {para}
              </p>
            ))}
          </div>
          <ProjectMetaSidebar project={project} />
        </div>
      </div>

      <div className="px-5 sm:px-10 md:px-[15%] mb-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-lg border border-border-subtle">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full"
            sizes="(max-width: 640px) calc(100vw - 40px), 512px"
          />
        </div>
      </div>

      <ProjectContributions contributions={project.contributions} />
      <ProjectTechStack project={project} />
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
