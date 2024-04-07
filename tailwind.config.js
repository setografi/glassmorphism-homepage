/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#FFFFFF",
        whiteTwo: "#F3F3F3",
      },

      fontFamily: {
        ouicksan: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [],
};
