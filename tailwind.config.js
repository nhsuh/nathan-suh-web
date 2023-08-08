/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#171616',
      'gren': '#09d0c9',
      'chalk': '#423939',
      'pinky': '#ea2b99',
      'pinky-two': '#f199c8',
      'fern': '#04643c'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in forwards",
      elongate: "elongate 1s ease-in",
      backgroundIn: "backgroundIn 1s ease-in"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      },
      elongate: {
        "0%": { width: 0, opacity: 0 },
        "100%": { width: "33.33333%", opacity: 1 }
      },
    }
  },
  plugins: [],
}

