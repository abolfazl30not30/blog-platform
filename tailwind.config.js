/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#124794",
        sideBlue:"#70DCF3",
        hoverBlue:"rgba(112,220,243,0.27)",
        mainPurple:"#8D7CD6",
        mainBg:"rgba(217, 217, 217, 0.5)",
        textGray: "#4E4E4E",
        gray80: "#4E4E4E",
        gray70: "#797979",
        gray9F: "#9F9F9F",
        borderGray: "#E0E3E0",
        greenBg: "#D9FCEB",
        greenText: "#12D377",
        orangeBg: "#FBE8DA",
        orangeText: "#EB8338",
      },
    },
  },
  plugins: [],
}