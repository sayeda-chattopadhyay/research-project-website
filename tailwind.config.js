/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#003d66",
          dark: "#FF6363",
          light: "#005C99",
        },
        secondary: {
          DEFAULT: "#FF6363",
          dark: "#FF6363",
          light: "#FF6363",
        },
      },
    },
  },
  plugins: [],
};
