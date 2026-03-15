"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";
import { Project } from "@/lib/projects";
import { useInView } from "@/hooks/useInView";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const cardRef = useInView();
  const imageRight = index % 2 !== 0;

  useEffect(() => {
    const saved = sessionStorage.getItem("scrollPosition");
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10) });
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="animate-fade-up group relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "color-mix(in srgb, var(--accent-primary) 40%, transparent)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px color-mix(in srgb, var(--accent-primary) 8%, transparent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
      }}
    >
      <div
        className={`flex flex-col ${
          imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-start`}
      >
        <div className="flex flex-col gap-4 lg:basis-1/2 z-10">
          <div>
            <h3
              className="font-bold text-2xl mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h3>
            <div
              className="text-sm mb-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.year}
              {project.client && ` · ${project.client}`}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.roles.split(" | ").map((role) => (
                <span
                  key={role}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
                    color: "var(--accent-primary)",
                    border: "1px solid color-mix(in srgb, var(--accent-primary) 25%, transparent)",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {project.shortDescription.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {project.link && (
            <div className="flex items-center gap-1.5">
              <LinkIcon
                size={13}
                style={{ color: "var(--text-secondary)" }}
              />
              <Link
                href={project.link}
                className="text-xs hover:underline underline-offset-2"
                style={{ color: "var(--accent-secondary)" }}
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
                className="px-2.5 py-1 rounded-md text-xs font-mono"
                style={{
                  background: "var(--bg-tertiary)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div>
            <Link
              href={`/${project.id}`}
              onClick={handleClick}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
              style={{ color: "var(--accent-primary)" }}
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
          <Link href={`/${project.id}`} onClick={handleClick}>
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
