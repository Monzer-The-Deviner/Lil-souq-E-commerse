/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarly:'#2FBA91',
        disabled:'#858585',
        alert:'#E57373',
        dark:'#052A1F',
        fill: '#f1f7f5'
      },

    },
  },
  plugins: [],
}