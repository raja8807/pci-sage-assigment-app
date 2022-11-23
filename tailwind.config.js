/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#37AFA6',
        'secondary' : '#076C74'
      }
    },
  },
  plugins: [],
}
