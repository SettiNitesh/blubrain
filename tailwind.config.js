/** @type {import('tailwindcss').Config} */
const colors = require("./src/Colors.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "beau-revage": ["Beau Rivage", "cursive"],
        cormorant: ["Cormorant", "serif"],
      },
      colors: { ...colors },
    },
  },
  plugins: [],
};
