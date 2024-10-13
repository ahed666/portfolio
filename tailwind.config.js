/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        'xs': {'max': '450px'}, // Custom xs for screens smaller than 400px
      },
    },
  },
  plugins: [],
}