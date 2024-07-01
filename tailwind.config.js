/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'purple': '2px 2px 25px rgba(110, 95, 156, 0.621)',
        'purple-dark': '1px 1px 25px rgba(110, 95, 156, 0.221)',
      }
    },
  },
  plugins: [],
}