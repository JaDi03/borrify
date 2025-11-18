/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-gradient': 'linear-gradient(to bottom, #243e76, #658bdd)',
        'border-gradient': 'linear-gradient(90deg, #1ee82f, #89ff9b)',
      },
      colors: {
        brandBg: "#e3ecff",
        brandText: "#1ee82f",
      },
    },
  },
  plugins: [],
}
