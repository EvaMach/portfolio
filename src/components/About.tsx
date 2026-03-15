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
            After an MA in linguistics, I moved into tech through QA — which
            gave me a foundation I still rely on:{" "}
            <span className="font-semibold rounded px-1 text-accent-primary bg-[color-mix(in_srgb,var(--accent-primary)_10%,transparent)]">
              thinking in edge cases, questioning assumptions, caring about what
              breaks.
            </span>{" "}
            My passion for UX/UI then pulled me into frontend, and after leading
            a dev team I went deeper — React Native, FastAPI, LLM-integrated
            backends. That last part feels like a full circle. Turns out
            designing a system prompt isn&apos;t that far from linguistics. 🙂
          </p>

          <p className="mb-5 text-text-primary text-lg leading-[1.75]">
            I care about{" "}
            <span className="font-semibold rounded px-1 text-accent-secondary bg-[color-mix(in_srgb,var(--accent-secondary)_10%,transparent)]">
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
        <Timeline items={aboutContent.timeline} label={aboutContent.journeyLabel} />
      </div>
    </section>
  );
};

export default About;
