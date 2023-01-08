/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "amber-black": "var(--app-amber-black)",
      black: "var(--app-black)",
      "light-blue": "var(--app-light-blue)",
      blue: "var(--app-blue)",
      "blue-deep": "var(--app-blue-deep)",
      "sky-blue": "var(--app-sky-blue)",
      white: '#fff',
      transparent: 'transparent',
      "home-blue": "var(--app-home-blue)"
    },
    extend: {},
  },
  plugins: [],
};
