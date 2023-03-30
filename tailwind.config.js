/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        glock: ["Glock","serif"],
        saira:['Saira Extra Condensed', 'sans-serif'],
        openSans:['Open Sans', 'sans-serif']
      },
      colors:{
        primaryText: "#1b9173",
        grayText:"#868e96",
        mainFont: "#303030e6",
        titleFont: "#343a40"
      }
    },
  },
  plugins: [],
}
