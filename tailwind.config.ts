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
				primary: "var(--font-geist-sans)",
			},
			colors: {
				background: 'var(--background)',
				backgroundTransparent: 'var(--baground-transparent)',
				backgroundDark: 'var(--background-dark)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
				accentTransparent: 'var(--accent-transparent)',
				accentLight: 'var(--accent-light)',
				destructive: 'var(--destructive)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
		}
	},
} satisfies Config;
