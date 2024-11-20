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
        softCream: "#ffead0",
        pantone: "#ff8c38",
        softOrange: "#ffcc8d",
        darkOrange: "#e17654",
        darkGreen: "#115e59",
        night: "#161616",
        imperialRed: "#ED2939",
        appleRed: "#FF0800",
        gray: {
          100: "#aaaaaa",
          200: "#4d4d4d",
          300: "#252525",
        },
      },
      boxShadow: {
        overlay: "inset 0 0 0 700px rgba(10, 10, 10, 0.7)",
      },
      backgroundImage: {
        mountain: "url(/mountain.png)",
      },
    },
  },
  plugins: [],
};
