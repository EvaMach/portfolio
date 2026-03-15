"use client";

import { useInView } from "@/hooks/useInView";
import LinkedinIcon from "./ui/linkedinIcon";
import GitHubIcon from "./ui/githubIcon";
import Link from "next/link";

const skills = [
  "React",
  "TypeScript",
  "React Native",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Cypress",
  "Figma",
  "REST API",
  "Git",
  "Ant Design",
];

const timeline = [
  { role: "MA Linguistics", years: "2020" },
  { role: "QA Engineer", years: "2020–2022" },
  { role: "Frontend Dev", years: "2022–2025" },
  { role: "Dev Team Lead", years: "2024" },
  { role: "Full-stack", years: "2025-now" },
];

const About = () => {
  const sectionRef = useInView();
  const chipsRef = useInView();
  const timelineRef = useInView();

  return (
    <section className="px-5 sm:px-10 md:px-[15%] py-20">
      <div className="section-label">About</div>

      <div className="gap-12 mt-2">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="animate-fade-up"
        >
          <p
            className="mb-5"
            style={{
              color: "var(--text-primary)",
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
          >
            After an MA in linguistics, I moved into tech through QA — which
            gave me a foundation I still rely on:{" "}
            <span
              className="font-semibold rounded px-1"
              style={{
                color: "var(--accent-primary)",
                background:
                  "color-mix(in srgb, var(--accent-primary) 10%, transparent)",
              }}
            >
              thinking in edge cases, questioning assumptions, caring about what
              breaks.
            </span>{" "}
            My passion for UX/UI then pulled me into frontend, and after leading
            a dev team I went deeper — React Native, FastAPI, LLM-integrated
            backends. That last part feels like a full circle. Turns out
            designing a system prompt isn't that far from linguistics. 🙂
          </p>

          <p
            className="mb-5"
            style={{
              color: "var(--text-primary)",
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
          >
            I care about{" "}
            <span
              className="font-semibold rounded px-1"
              style={{
                color: "var(--accent-secondary)",
                background:
                  "color-mix(in srgb, var(--accent-secondary) 10%, transparent)",
              }}
            >
              clean, maintainable code
            </span>{" "}
            and like leaving things better than I found them. My goal stays the
            same: build things that make users go &ldquo;oh, that&apos;s
            cool.&rdquo;
          </p>
        </div>
      </div>

      <div
        ref={timelineRef as React.RefObject<HTMLDivElement>}
        className="animate-fade-up mt-16"
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          My journey
        </p>
        <div className="flex flex-col sm:flex-row items-start w-full">
          {timeline.map((item, i) => (
            <div key={item.role} className="flex sm:flex-row sm:items-center sm:flex-1 sm:last:flex-none flex-col items-start w-full sm:w-auto">
              <div className="flex sm:flex-col sm:items-center items-center gap-3 sm:gap-0">
                <div
                  className="w-3 h-3 rounded-full shrink-0 sm:mb-3 transition-all duration-300"
                  style={{ background: "var(--accent-primary)" }}
                />
                <div className="flex sm:flex-col sm:items-center sm:text-center">
                  <span
                    className="text-sm font-semibold leading-tight sm:mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.role}
                  </span>
                  <span
                    className="text-xs ml-2 sm:ml-0"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.years}
                  </span>
                </div>
              </div>
              {i < timeline.length - 1 && (
                <div
                  className="w-px sm:w-auto sm:flex-1 h-6 sm:h-px ml-[5px] sm:ml-0 sm:mx-2 sm:mt-[-24px]"
                  style={{ background: "var(--border-subtle)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
