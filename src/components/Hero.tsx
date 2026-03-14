"use client";

import Image from "next/image";
import myPic from "../../public/img/me.webp";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] flex items-center px-5 sm:px-10 md:px-[15%] py-16"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
        <div>
          <h1
            className="hero-line-1 font-extrabold mb-2 leading-tight"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Hi, I&apos;m Eva.
          </h1>
          <h2
            className="hero-line-2 font-extrabold mb-6"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: "1.15",
            }}
          >
            I build <span className="gradient-text">things.</span>
          </h2>

          <p
            className="hero-subtitle mb-8 max-w-lg"
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.125rem",
              lineHeight: "1.7",
            }}
          >
            A software developer with a background in QA and UX/UI design. I
            care about clean code, great user experience, and leaving things
            better than I found them.
          </p>

          <div className="hero-cta flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: "var(--accent-primary)",
                color: "var(--bg-primary)",
                boxShadow:
                  "0 0 20px color-mix(in srgb, var(--accent-primary) 30%, transparent)",
              }}
            >
              View my work ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
              style={{
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-primary)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-primary)";
              }}
            >
              Get in touch
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
            className="hero-shape-1 absolute w-10 h-10 rounded-full border-2 hidden xs:block"
            style={{
              borderColor: "var(--accent-primary)",
              top: "5%",
              right: "10%",
              opacity: 0.7,
            }}
            aria-hidden="true"
          />
          <div
            className="hero-shape-2 absolute w-6 h-6 rounded-sm rotate-45 hidden xs:block"
            style={{
              background: "var(--accent-tertiary)",
              bottom: "15%",
              left: "5%",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div
            className="hero-shape-3 absolute w-8 h-8 rounded-full hidden xs:block"
            style={{
              background: "var(--accent-secondary)",
              top: "15%",
              left: "8%",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          <div
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden"
              style={{ background: "var(--bg-primary)" }}
            >
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
      </div>
    </section>
  );
};

export default Hero;
