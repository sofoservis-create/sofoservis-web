import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f8f8",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#b4b4b4",
          400: "#8f8f8f",
          500: "#666666",
          600: "#404040",
          700: "#2b2b2b",
          800: "#1a1a1a",
          900: "#000000",
        },
        accent: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fdf291",
          300: "#fbe85f",
          400: "#f9df2d",
          500: "#f4d80c",
          600: "#c9b208",
          700: "#9f8c06",
          800: "#756605",
          900: "#4b4003",
        },
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      screens: {
        desktop: "1256px",
      },
    },
  },
  plugins: [],
} satisfies Config;
