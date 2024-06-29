/** @type {import('tailwindcss').Config} */

/*const colors = require('tailwindcss/colors')*/
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"10px",
      },
      
      fontFamily: {
        custom: [ "sans-serif"],
      },
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      blue: ' #00C9AD',
      orange :'#FFA500',
      brown: {
          
          200: '#F8C794',
          300:'#FFE0B5',
          400:'#F8C794',
          500: '#875012',
          600:'#F8C794',
          700: '#4A2A06',
          800: '#846358',
          900: '#301B03',
       
    },
      gray: {
        700:'#71797E',
        500:'#848884',
        300:'#D3D3D3',
      },
      yellow: '#FFC300',
     

      
      spot: {
        creamy:'#C18143',
        pink:'#FFEACE',

      },

  },
  
  plugins: [],

  }
}

  

