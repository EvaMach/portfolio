"use client";

import { useInView } from "@/hooks/useInView";
import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import SocialIconLink from "./ui/socialIconLink";
import LinkedinIcon from "./ui/linkedinIcon";
import GitHubIcon from "./ui/githubIcon";
import { contactContent } from "@/lib/content";
import { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  linkedin: LinkedinIcon,
  github: GitHubIcon,
  email: Mail as ComponentType<{ className?: string }>,
};

const iconClassMap: Record<string, string> = {
  linkedin: "w-5 h-5 fill-current",
  github: "fill-current w-5 h-5",
  email: "w-[18px] h-[18px]",
};

const Contact = () => {
  const leftRef = useInView();
  const rightRef = useInView();

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 md:px-[15%] py-20 scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className="animate-fade-up"
        >
          <div className="section-label">{contactContent.sectionLabel}</div>
          <h2 className="font-extrabold mb-4 text-text-primary text-[clamp(1.75rem,3vw,2.5rem)]">
            {contactContent.heading}
          </h2>
          <p className="mb-8 text-text-secondary text-[1.05rem] leading-[1.7]">
            {contactContent.description}
          </p>

          <div className="flex gap-3">
            {contactContent.socialLinks.map((link) => (
              <SocialIconLink
                key={link.label}
                href={link.href}
                label={link.label}
                icon={iconMap[link.iconType]}
                iconClassName={iconClassMap[link.iconType]}
              />
            ))}
          </div>
        </div>

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
