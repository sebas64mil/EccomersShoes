/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Lemon", "serif"],
        cuprum: ["Cuprum", "sans-serif"],
      },
    },
  },
  plugins: [],
};
