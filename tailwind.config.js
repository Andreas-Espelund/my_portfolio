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
      'primary' : '#0b3866',
      'neutral' : '#ebf1f7',
      'secondary' : '#95f9c3',
      'android' : "#3ddc84",
      'web' : "#1982FC",
      'current': 'currentColor'
      },
      dropShadow : {
        'secondary': '0 35px 35px secondary',
      },
      minHeight: {
        '1/2': '50%',
        'halfscreen' : '50dvh'
      },
      fontSize:{
        'huge' : '10rem'
      },
      fontFamily:{
        'game' : ['Press Start 2P','sans-serif']
      }
      
    },
    
    
  },
  plugins: [],
}
