import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div style={{ color: "var(--text-primary)" }}>
      <div
        className="relative px-5 sm:px-10 md:px-[15%] pt-10 pb-32"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--accent-primary) 12%, var(--bg-primary)) 0%, var(--bg-primary) 70%)",
        }}
      >
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors duration-200 hover:text-accent-primary"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <div className="max-w-2xl">
          <h1
            className="font-extrabold mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1" }}
          >
            {project.title}
          </h1>
          <p
            className="mb-5 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.shortDescription[0]}
          </p>

          <div
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-5"
            style={{ color: "var(--text-secondary)" }}
          >
            <span>
              <strong style={{ color: "var(--text-primary)" }}>Year</strong>{" "}
              {project.year}
            </span>
            {project.client && (
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Client</strong>{" "}
                {project.client}
              </span>
            )}
            <span>
              <strong style={{ color: "var(--text-primary)" }}>Role</strong>{" "}
              {project.roles.split(" | ")[0]}
            </span>
            <span>
              <strong style={{ color: "var(--text-primary)" }}>Team</strong>{" "}
              {project.team}
            </span>
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03] mb-5"
              style={{
                background: "var(--accent-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Visit live site
              <ExternalLink size={14} />
            </Link>
          )}

          <div className="flex flex-wrap gap-2 mt-2">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono"
                style={{
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-10 md:px-[15%] -mt-20 mb-16">
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: "1px solid var(--border-subtle)" }}
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>

      <div className="px-5 sm:px-10 md:px-[15%] py-12">
        <div className="section-label">Overview</div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mt-4">
          <div className="space-y-4">
            {project.longDescription.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.75",
                  fontSize: "1.05rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 self-start space-y-4"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {[
              { label: "Role", value: project.roles },
              { label: "Team", value: project.team },
              { label: "Year", value: project.year },
              project.client ? { label: "Client", value: project.client } : null,
            ]
              .filter(Boolean)
              .map((item) => (
                <div key={item!.label}>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item!.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item!.value}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="px-5 sm:px-10 md:px-[15%] py-12"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="section-label">My Role</div>
        <h2
          className="font-bold mb-6 mt-2"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          Contributions &amp; highlights
        </h2>
        <ul className="space-y-3 max-w-2xl">
          {project.contributions.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-primary)" }}
                aria-hidden="true"
              />
              <span
                style={{ color: "var(--text-secondary)", lineHeight: "1.65" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="px-5 sm:px-10 md:px-[15%] py-12"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="section-label">Built With</div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
          {[
            ...project.techStack.map((t) => ({ name: t, context: "Core stack" })),
            ...project.libs.map((t) => ({ name: t, context: "Libraries" })),
            ...project.tools.map((t) => ({ name: t, context: "Tools" })),
          ].map((item) => (
            <div
              key={item.name + item.context}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span
                className="font-mono font-medium text-sm"
                style={{ color: "var(--accent-primary)" }}
              >
                {item.name}
              </span>
              <span
                className="text-xs ml-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        {prevProject ? (
          <Link
            href={`/${prevProject.id}`}
            className="flex flex-col gap-1 px-5 sm:px-10 md:px-[10%] py-10 transition-colors duration-200 hover:bg-bg-secondary"
            style={{ borderRight: "1px solid var(--border-subtle)" }}
          >
            <span
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              <ArrowLeft size={13} /> Previous
            </span>
            <span
              className="font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link
            href={`/${nextProject.id}`}
            className="flex flex-col items-end gap-1 px-5 sm:px-10 md:px-[10%] py-10 transition-colors duration-200 hover:bg-bg-secondary"
          >
            <span
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              Next <ArrowRight size={13} />
            </span>
            <span
              className="font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
