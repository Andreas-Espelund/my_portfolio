/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
      'primary' : '#7077fd',
      'neutral' : '#e5e5f7',
      'secondary' : '#FDF670',
      'android' : "#3ddc84",
      'web' : "#1982FC",
      },
      dropShadow : {
        'secondary': '0 35px 35px secondary',
      },
      minHeight: {
        '1/2': '50%',
        'halfscreen' : '50dvh'
      }
      
    },
    
    
  },
  plugins: [],
}
