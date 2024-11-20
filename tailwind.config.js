/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#caaf68', // Primary color 
          light: '#ffd47d',  // Light variant
          dark: '#a68c50',   // Dark variant
        },
        secondary: {
          DEFAULT: '#009fc8', // Secondary color
        },
      },
    },
  },
  plugins: [],
}