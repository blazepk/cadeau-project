/** @type {import('tailwindcss').Config} */

/*const colors = require('tailwindcss/colors')*/
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        custom: ["Protest Revolution", "sans-serif"],
      },
    },
  },
  plugins: [],
};
