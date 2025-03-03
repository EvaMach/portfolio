import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ButtonWithIcon({ children, className }: Props) {
  return (
    <Button className={`group ${className}`}>
      {children}
      <ArrowUpRight className="transition-transform duration-200 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Button>
  );
}