/** @type {import('tailwindcss').Config} */
const fontFamily = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs:"500px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: {
          DEFAULT: "#a37d4c",
          hover: "#967142",
        },
      },
      backgroundImage: {
        room: "url('/img/room.webp')",
      },
      fontFamily: {
        primary: "var(--font-gilda)",
        secondary: "var(--font-barlow)",
        tertiary: "var(--font-barlowCondansed)",
      },
    },
  },
  plugins: [],
};
