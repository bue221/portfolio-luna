/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",

        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
