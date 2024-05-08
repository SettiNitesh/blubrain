/** @type {import('tailwindcss').Config} */
const colors = require('./src/Colors.js');

module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'beau-revage': ['Beau Rivage', 'cursive'],
        cormorant: ['Cormorant', 'serif'],
      },
      colors: { ...colors },
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
