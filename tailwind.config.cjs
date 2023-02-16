/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        darkBrown: "hsl(25, 47%, 15%)",
        paleOrange: "hsl(28, 10%, 53%)",
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
