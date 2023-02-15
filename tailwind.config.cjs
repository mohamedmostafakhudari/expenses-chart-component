/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "",
        cyan: "",
        darkBrown: "",
        paleOrange: "",
      },
      fontSize: {
        primary: "18px",
      },
      fontFamily: {
        body: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
