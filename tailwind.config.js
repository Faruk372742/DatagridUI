/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        outerBorderGray: "#EAEAEA",
        borderGrey: "#C4CEE5",
        white: "#FFFFFF",
        bgGray: "#EFF2FF",
        lightPurple: "#744BFC",
        buttonGray: "#F5F7FF",
        inputBorderGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
