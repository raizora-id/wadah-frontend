/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),
      colors: {
        black: "#1f1f1f",
        gray: "#292929",
        
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
	plugins: [
		 require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
}
