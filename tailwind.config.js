/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray': {
          100: '#E5E5E5',
          200: '#C4C4CC',
          500: '#454545',
          800: '#3C3C3C',
          900: '#121214'
        },
        'violet': {
          50: '#a667ff',
          100: '#874FFF',
          200: '#7000FF',
          300: '#5200FF'
        }
      },
      fontFamily: {
        default: ["Rubik_400Regular"],
        light: ["Rubik_300Light"],
        medium: ["Rubik_500Medium"]
      },
    },
  },
  plugins: [],
}

