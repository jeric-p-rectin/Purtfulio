import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { // more-projects section backgrounds
        'calculator-with-opacity': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/calculator.jpg')",
        'calculator-no-opacity': "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/calculator.jpg')",
        'dictionary-with-opacity': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bulaloi-dictionary.jpg')",
        'dictionary-no-opacity': "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/bulaloi-dictionary.jpg')",
        'notepud-with-opacity': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/notepud.jpg')",
        'notepud-no-opacity': "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/notepud.jpg')",
      },
      colors: {
        primary: "#FFFFFF", // White
        secondary: "#232B2B", // Black
        tertiary: "#2a2a2a", // Black but for bg-buttons
        fourtuary: "#F0EFEF", // White for bg work tags
        quinary: "#8B8B8B", // Black for text highlight
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
