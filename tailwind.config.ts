import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'with-opacity': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/gojo.jpg')",
        'no-opacity': "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/gojo.jpg')"
      },
      screens: {
        'custom': { 'raw': '(min-height: 800px) and (min-width: 1024px)' },
      },
      colors: {
        primary: "#FFFFFF", // White
        secondary: "#232B2B", // Black
        tertiary: "#2a2a2a", // Black but for bg-buttons
        fourtuary: "#F0EFEF", // White for bg work tags
        quinary: "#5B5B5B", // Black for text highlight
      },
      fontFamily: {
        abril: ['var(--font-abril)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
