import { footerContent } from "@/lib/content";

const Footer = () => (
  <footer className="flex flex-wrap justify-between items-center gap-2 px-5 sm:px-10 md:px-[15%] py-6 mt-8 border-t border-border-subtle text-text-secondary text-sm">
    <span>{footerContent.copyright}</span>
  </footer>
);

export default Footer;
