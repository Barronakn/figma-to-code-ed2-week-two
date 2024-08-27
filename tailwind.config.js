/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax: "Chillax, sans-serif",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/bg-header.png')",
        collection1: "url('/src/assets/images/collection1.png')",
        collection2: "url('/src/assets/images/collection2.png')",
      },
      colors: {
        "black-50": "#1D1D1D",
        "gray-150": "#E5E5E5",
        "gray-250": "#C3C3C3",
        "gray-350": "#7E7E7E",
      },
      spacing: {
        4.5: "18px",
        6.5: "26px",
        11.5: "46px",
        13: "52px",
        17: "72px",
        26: "109.75px",
        30: "120px",
      },
      width: {
        11: "44px",
        17: "66px",
        18: "72px",
        74: "316px",
        305: "305px",
        84: "350px",
        500: "500px",
        675: "675px",
      },
      height: {
        18: "72px",
        446: "446px",
      },
      gap: {
        1.5: "14px",
        4.5: "18px",
        5.5: "22px",
        11: "42px",
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "100px",
      },
      fontSize: {
        28: "28px",
        "xs-small" : "10px",
        "4.5xl": "42px",
      }
    },
  },
  plugins: [],
};
