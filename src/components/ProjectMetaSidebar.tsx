import { Project } from "@/lib/projects";
import { projectDetailContent } from "@/lib/content";

interface Props {
  project: Project;
}

const ProjectMetaSidebar = ({ project }: Props) => {
  const { metaLabels } = projectDetailContent;
  const items = [
    { label: metaLabels.role, value: project.roles },
    { label: metaLabels.team, value: project.team },
    { label: metaLabels.year, value: project.year },
    project.client ? { label: metaLabels.client, value: project.client } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="rounded-2xl p-6 self-start space-y-4 bg-bg-secondary border border-border-subtle">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-text-secondary">
            {item.label}
          </p>
          <p className="text-sm font-medium text-text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectMetaSidebar;
