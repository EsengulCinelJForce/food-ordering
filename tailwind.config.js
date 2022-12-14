/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    //  container:{
    //   screens:{
    //     xs:"375px",
    //     sm:"640",
    //     md:"768",
    //     lg:"1024",
    //     xl:"1140",
    //     "2xl":"1104px", 
    //   },
    //  },
      
      colors:{
        primary :"#ffbe33",
        secondary:"#222831",
        danger:"#ff0000"
      },
      fontFamily:{
        dancing:['Dancing Script','cursive'],
        sans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
