"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";
import { Project } from "@/lib/projects";
import { useInView } from "@/hooks/useInView";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const cardRef = useInView();
  const imageRight = index % 2 !== 0;
  const { saveScrollPosition } = useScrollRestoration();

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="animate-fade-up group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 hover:shadow-[0_8px_32px_color-mix(in_srgb,var(--accent-primary)_8%,transparent)]"
    >
      <div
        className={`flex flex-col ${
          imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-start`}
      >
        <div className="flex flex-col gap-4 lg:basis-1/2 z-10">
          <div>
            <h3 className="font-bold text-2xl mb-1 text-text-primary">
              {project.title}
            </h3>
            <div className="text-sm mb-2 text-text-secondary">
              {project.year}
              {project.client && ` · ${project.client}`}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.roles.split(" | ").map((role) => (
                <span
                  key={role}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-accent-primary border"
                  style={{
                    background: "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
                    borderColor: "color-mix(in srgb, var(--accent-primary) 25%, transparent)",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {project.shortDescription.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          {project.link && (
            <div className="flex items-center gap-1.5">
              <LinkIcon size={13} className="text-text-secondary" />
              <Link
                href={project.link}
                className="text-xs hover:underline underline-offset-2 text-accent-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </Link>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-bg-tertiary text-text-secondary border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <Link
              href={`/${project.id}`}
              onClick={saveScrollPosition}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link text-accent-primary"
            >
              Read more
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="lg:basis-1/2 w-full">
          <Link href={`/${project.id}`} onClick={saveScrollPosition}>
            <div className="rounded-xl overflow-hidden">
              <Image
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full rounded-xl"
                src={project.image}
                alt={`${project.title} app screenshot`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
