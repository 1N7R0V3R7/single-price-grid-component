/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'primary-cyan': 'hsl(179, 62%, 43%)',
        'primary-yellow': 'hsl(71, 73%, 54%)',
        'neutral-gray': 'hsl(204, 43%, 93%)',
        'neutral-blue': 'hsl(218, 22%, 67%)'
      }
    },
  },
  plugins: [],
}
