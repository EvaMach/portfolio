import { Sun, Moon } from "lucide-react";

interface Props {
  theme: "dark" | "light";
  onToggle: () => void;
}

const ThemeToggle = ({ theme, onToggle }: Props) => (
  <button
    onClick={onToggle}
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110 active:scale-90 bg-bg-tertiary border border-border-subtle text-text-secondary"
  >
    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
  </button>
);

export default ThemeToggle;
