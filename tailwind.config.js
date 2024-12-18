/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'heading': ['Poppins'],
        'body': ['Rubik'],
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