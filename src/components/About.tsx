"use client";

import { useInView } from "@/hooks/useInView";
import { aboutContent } from "@/lib/content";
import Timeline from "./Timeline";

const About = () => {
  const sectionRef = useInView();
  const timelineRef = useInView();

  return (
    <section className="px-5 sm:px-10 md:px-[15%] py-20">
      <div className="section-label">{aboutContent.sectionLabel}</div>

      <div className="gap-12 mt-2">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="animate-fade-up"
        >
          <p className="mb-5 text-text-primary text-lg leading-[1.75]">
            {aboutContent.p1Prefix}{" "}
            <span className="font-semibold rounded px-1 text-accent-primary bg-[color-mix(in_srgb,var(--accent-primary)_10%,transparent)]">
              {aboutContent.p1Highlight}
            </span>{" "}
            {aboutContent.p1Suffix}
          </p>

          <p className="mb-5 text-text-primary text-lg leading-[1.75]">
            {aboutContent.p2Prefix}{" "}
            <span className="font-semibold rounded px-1 text-accent-secondary bg-[color-mix(in_srgb,var(--accent-secondary)_10%,transparent)]">
              {aboutContent.p2Highlight}
            </span>{" "}
            {aboutContent.p2Suffix}{" "}
            <span className="font-semibold rounded px-1 text-accent-tertiary bg-[color-mix(in_srgb,var(--accent-tertiary)_10%,transparent)]">
              {aboutContent.p2Highlight2}
            </span>
            {aboutContent.p2Suffix2}
          </p>
        </div>
      </div>

      <div
        ref={timelineRef as React.RefObject<HTMLDivElement>}
        className="animate-fade-up mt-16"
      >
        <Timeline items={aboutContent.timeline} label={aboutContent.journeyLabel} />
      </div>
    </section>
  );
};

export default About;
