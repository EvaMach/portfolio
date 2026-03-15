"use client";

import Image from "next/image";
import myPic from "../../public/img/me.png";
import { heroContent } from "@/lib/content";

const Hero = () => (
  <section
    id="about"
    className="relative min-h-[80vh] flex items-center px-5 sm:px-10 md:px-[15%] py-16"
  >
    <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
      <div>
        <h1
          className="hero-line-1 font-extrabold mb-2 leading-tight text-text-primary text-[clamp(2.5rem,5vw,4rem)]"
        >
          {heroContent.heading}
        </h1>
        <h2
          className="hero-line-2 font-extrabold mb-2 text-[clamp(1.75rem,4vw,3rem)] leading-[1.15]"
        >
          I <span className="gradient-text">{heroContent.subheadingHighlight}</span> things
        </h2>
        <p
          className="hero-line-2 font-extrabold mb-6 text-[clamp(1.25rem,3vw,2rem)] leading-[1.15]"
          style={{ color: "color-mix(in srgb, var(--text-primary) 60%, transparent)" }}
        >
          {heroContent.tagline}
        </p>

        <p className="hero-subtitle mb-8 max-w-lg text-text-secondary text-lg leading-[1.7]">
          Developer. Former linguist and QA engineer.{" "}
          <br />
          Frontend-first, but these days the stack goes all the way — mobile,
          Python backends, and AI.
        </p>

        <div className="hero-cta flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg bg-accent-primary text-bg-primary"
            style={{
              boxShadow: "0 0 20px color-mix(in srgb, var(--accent-primary) 30%, transparent)",
            }}
          >
            {heroContent.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] border border-border-subtle text-text-primary hover:border-accent-primary hover:text-accent-primary"
          >
            {heroContent.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-avatar relative flex justify-center items-center">
        <div
          className="absolute rounded-full"
          style={{
            inset: "-20%",
            background:
              "radial-gradient(ellipse at center, var(--glow-yellow) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        <div
          className="hero-shape-1 absolute z-20 w-14 h-14 rounded-full hidden xs:block"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, var(--accent-primary) 0%, var(--accent-primary) 40%, transparent 100%)",
            bottom: "22%",
            right: "2%",
            opacity: 0.9,
          }}
          aria-hidden="true"
        />
        <div
          className="hero-shape-2 absolute w-8 h-8 rounded-lg rotate-45 hidden xs:block"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, var(--accent-tertiary) 0%, var(--accent-tertiary) 35%, transparent 100%)",
            bottom: "15%",
            left: "5%",
            opacity: 0.85,
          }}
          aria-hidden="true"
        />
        <div
          className="hero-shape-3 absolute w-10 h-10 rounded-full hidden xs:block"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, var(--accent-secondary) 0%, var(--accent-secondary) 35%, transparent 100%)",
            top: "15%",
            left: "8%",
            opacity: 0.7,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 overflow-hidden">
          <Image
            src={myPic}
            alt="Eva Machová — frontend developer"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
