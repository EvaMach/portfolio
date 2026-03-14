"use client";

import { useInView } from "@/hooks/useInView";
import LinkedinIcon from "./ui/linkedinIcon";
import GitHubIcon from "./ui/githubIcon";
import Link from "next/link";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const leftRef = useInView();
  const rightRef = useInView();

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 md:px-[15%] py-20 scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className="animate-fade-up"
        >
          <div className="section-label">Get in touch</div>
          <h2
            className="font-extrabold mb-4"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            Let&apos;s work together.
          </h2>
          <p
            className="mb-8"
            style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}
          >
            Have a project in mind or just want to say hi? I&apos;m always happy to
            chat. Send me a message and I&apos;ll get back to you as soon as
            possible.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com/in/eva-machova-frontend-developer/"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--bg-primary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
              }}
            >
              <LinkedinIcon className="w-5 h-5 fill-current" />
            </Link>
            <Link
              href="https://github.com/EvaMach"
              aria-label="GitHub"
              className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--bg-primary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
              }}
            >
              <GitHubIcon className="fill-current w-5 h-5" />
            </Link>
            <Link
              href="mailto:evca.machova@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--bg-primary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
              }}
            >
              <Mail size={18} />
            </Link>
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
            Or email me directly at{" "}
            <Link
              href="mailto:evca.machova@gmail.com"
              className="hover:underline underline-offset-2"
              style={{ color: "var(--accent-primary)" }}
            >
              evca.machova@gmail.com
            </Link>
          </p>
        </div>

        {/* Right column — form */}
        <div
          ref={rightRef as React.RefObject<HTMLDivElement>}
          className="animate-fade-up stagger-2"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
