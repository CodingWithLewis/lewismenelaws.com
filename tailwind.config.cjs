/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    fontFamily: {
      display: ["Familjen Grotesk", ...defaultTheme.fontFamily.sans],
      sans: ["Familjen Grotesk", ...defaultTheme.fontFamily.sans],
      mono: ["RX100 ", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        black: "#131115",
        white: "#d7d7d7",
        accent: {
          50: "hsl(0, 0%, 96%)",
          100: "hsl(0, 0%, 91%)",
          200: "hsl(0, 0%, 82%)",
          300: "hsl(0, 0%, 71%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 52%)",
          600: "hsl(0, 0%, 50%)",
          700: "hsl(0, 0%, 40%)",
          800: "hsl(0, 0%, 34%)",
          900: "hsl(0, 0%, 28%)",
          950: "hsl(0, 0%, 15%)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
