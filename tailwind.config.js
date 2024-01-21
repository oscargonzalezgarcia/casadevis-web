/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'house': "url(/public/images/sky.jpg)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}