/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        cream: "#fff7ed",
        softCream: "#fffead0",
        orange: "#ff8c38",
        darkOrange: "#e17654",
        darkGreen: "#115e59",
        night: "#161616",
        gray: {
          100: "#aaaaaa",
          200: "#4d4d4d",
          300: "#252525",
        },
      },
    },
  },
  plugins: [],
};
