/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#a74432',
          50: '#fbf2ee',
          100: '#f4e1da',
          200: '#ebc4b8',
          300: '#d99c8b',
          400: '#c2735d',
          500: '#a74432',
          600: '#933b2c',
          700: '#843625',
          800: '#6f3024',
          900: '#5d2b22',
        },
        secondary: {
          DEFAULT: '#1b2a46',
          50: '#f1f3f5',
          100: '#e0e4e9',
          200: '#c2cbd5',
          300: '#a0aebb',
          400: '#718296',
          500: '#536780',
          600: '#3c506b',
          700: '#2c3e58',
          800: '#22324b',
          900: '#1b2a46',
        },
      },
    },
  },
  plugins: [],
}
