/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: [ 'Space Grotesk', 'sans-serif'],
       
      },
      colors: {
        'bg-color': '#2A1148',
        'primary': '#C1B4D1',
        'secondary': '#130f40',
        'border': '#7AFDCD',
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'soft': '0 5px 15px rgba(0,0,0,0.1)',
        'neon': '0 0 15px rgba(0,255,0,0.5)',
      },
      backgroundImage: {
        bannerImg: "url('/01 (1).webp')",
      }

    },
  },
  plugins: [],
}