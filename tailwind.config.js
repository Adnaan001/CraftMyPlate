/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#EEDEFF',
          200:'#5000A2'
        }
      },
      fontFamily:{
        'Jakarta':["Plus Jakarta Sans", "serif"]
      }
    },
  },
  plugins: [],
}

