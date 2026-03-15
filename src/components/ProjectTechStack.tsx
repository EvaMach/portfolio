import { Project } from "@/lib/projects";
import { projectDetailContent } from "@/lib/content";

interface Props {
  project: Project;
}

const ProjectTechStack = ({ project }: Props) => {
  const { techContextLabels } = projectDetailContent;
  const items = [
    ...project.techStack.map((t) => ({ name: t, context: techContextLabels.stack })),
    ...project.libs.map((t) => ({ name: t, context: techContextLabels.libs })),
    ...project.tools.map((t) => ({ name: t, context: techContextLabels.tools })),
  ];

  return (
    <div className="px-5 sm:px-10 md:px-[15%] py-12 border-t border-border-subtle">
      <div className="section-label">{projectDetailContent.techLabel}</div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
        {items.map((item) => (
          <div
            key={item.name + item.context}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle"
          >
            <span className="font-mono font-medium text-sm text-accent-primary">
              {item.name}
            </span>
            <span className="text-xs ml-auto text-text-secondary">
              {item.context}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
