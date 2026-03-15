import Link from "next/link";
import { ComponentType } from "react";

interface Props {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
}

const SocialIconLink = ({ href, label, icon: Icon, iconClassName }: Props) => (
  <Link
    href={href}
    aria-label={label}
    className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:scale-110 bg-bg-tertiary border border-border-subtle text-text-secondary hover:bg-accent-primary hover:text-bg-primary hover:border-accent-primary"
  >
    <Icon className={iconClassName} />
  </Link>
);

export default SocialIconLink;
