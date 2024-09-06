/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarly:'#35Ad81',
        secendry:'ffe066',
        disabled:'#858585',
        alert:'#cc2936',
        dark:'#0c1618',
        fill: '#f1f7f5'
      },

    },
  },
  plugins: [],
}