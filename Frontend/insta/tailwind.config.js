/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dancingscript : [ "Dancing Script" , "cursive"  ],
        montseerat:["Montserrat","sans-serif"]
      },
      colors:{
        customBlue:('rgb(55,151,239)')
      }
    },
  },
  plugins: [],
}



