const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    listStyleType: {
      square: 'square',
    },
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init)'
  ],
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  }
};
