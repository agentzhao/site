/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#fdc029",
        "custom-black": "#171820",
        "custom-orange": "#df861d",
        "custom-grey": "#bcb6ae",
        "background-color": "#1B2430",
        "custom-purple": "#D6D5A8",
      },
    },
    fontFamily: {
      Monsterrat: ["Monsterrat", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
