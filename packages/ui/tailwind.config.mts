import type { Config } from "tailwindcss/types/config";
import shared from "./tailwind-shared.mjs";

export default {
	...shared,
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,astro}",
		"./components/**/*.{ts,tsx,jsx,tsx}",
		"./app/**/*.{ts,tsx,jsx,tsx,astro}",
		"./src/**/*.{ts,tsx,jsx,tsx,astro}",
		"../../packages/ui/src/components/**/*.{ts,tsx,astro}",
	],
	theme: {
		extend: {
			colors: {
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
		},
	},
} satisfies Config;
