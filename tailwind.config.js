/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Poppins', ...defaultTheme.fontFamily.sans],
        'body': ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#fff',
        black: '#000',
        heading: '#222',
        body: '#636363',
        accent: '#2ea6f7',
        blue: '#002261',
        gray: '#e8edf0',
        border: '#dddddd',
      },
    },
  },
  plugins: [],
}