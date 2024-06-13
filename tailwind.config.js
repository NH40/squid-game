/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{css, scss}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "squid-pink": "#FF287E"
      },
    },
  },
  plugins: [],
}