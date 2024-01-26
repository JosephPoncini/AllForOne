/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{html,js}",
  "./index.html",
  "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'LaserGreen': "#14FF00",
        'MyGrey': '#475B46',
      },
      fontFamily: {
        'CutiveMono': ['Cutive Mono'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}