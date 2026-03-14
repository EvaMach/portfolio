import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        primary: "var(--font-jakarta)",
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        /* New design system tokens */
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-tertiary": "var(--accent-tertiary)",
        "border-subtle": "var(--border-subtle)",
        /* Legacy / shadcn-ui tokens */
        background: "var(--background)",
        foreground: "var(--foreground)",
        destructive: "var(--destructive)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-reverse": "float-reverse 9s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
} satisfies Config;
