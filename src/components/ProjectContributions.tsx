import { projectDetailContent } from "@/lib/content";

interface Props {
  contributions: string[];
}

const ProjectContributions = ({ contributions }: Props) => (
  <div
    className="px-5 sm:px-10 md:px-[15%] py-12 border-t border-border-subtle"
  >
    <div className="section-label">{projectDetailContent.roleLabel}</div>
    <h2 className="font-bold mb-6 mt-2 text-[clamp(1.4rem,2.5vw,2rem)]">
      {projectDetailContent.contributionsHeading}
    </h2>
    <ul className="space-y-3 max-w-2xl">
      {contributions.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-primary"
            aria-hidden="true"
          />
          <span className="text-text-secondary leading-[1.65]">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectContributions;
