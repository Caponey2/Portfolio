/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './pages/**/*.ts',
    './pages/**/*.tsx',
    './components/**/*.js',
    './components/**/*.jsx',
    './components/**/*.ts',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      keyframes: {
        squareping1: {
          '0%': {transform: 'scale(1.0) rotate(0deg)'},
          '30%': {transform: 'scale(1.0) rotate(0deg)'},
          '50%': {transform: 'scale(1.5) rotate(45deg)'},
          '70%': {transform: 'scale(2) rotate(90deg)'},
          '100%': {transform: 'scale(2) rotate(90deg) '},
        },
        squareping1Rev: {
          '0%': {transform: 'scale(1.0) rotate(0deg)'},
          '30%': {transform: 'scale(1.0) rotate(0deg)'},
          '50%': {transform: 'scale(1.5) rotate(-45deg)'},
          '70%': {transform: 'scale(2) rotate(-90deg)'},
          '100%': {transform: 'scale(2) rotate(-90deg) '},
        },
        squareping2: {
          '0%': {transform: 'scale(1.0) rotate(0deg)'},
          '30%': {transform: 'scale(1.0) rotate(0deg)'},
          '50%': {transform: 'scale(1.5) rotate(45deg)'},
          '70%': {transform: 'scale(2) rotate(90deg)'},
          '100%': {transform: 'scale(2) rotate(90deg)'},
        },
        squareping3: {
          '0%': {transform: 'scale(1.0) rotate(0deg)'},
          '30%': {transform: 'scale(1.0) rotate(0deg)'},
          '50%': {transform: 'scale(1.33) rotate(-45deg)'},
          '75%': {transform: 'scale(1.66) rotate(-90deg)'},
          '100%': {transform: 'scale(1.66) rotate(-90deg)'},
        },
        squareping4: {
          '0%': {transform: 'scale(1.0) rotate(0deg)'},
          '30%': {transform: 'scale(1.0) rotate(0deg)'},
          '50%': {transform: 'scale(1.25) rotate(45deg)'},
          '75%': {transform: 'scale(1.5) rotate(90deg)'},
          '100%': {transform: 'scale(1.5) rotate(90deg)'},
        },
      },
      animation: {
        squarePing1: 'squareping1 3s linear infinite',
        squarePing1Rev: 'squareping1Rev 3s linear infinite',
        squarePing2: 'squareping2 3s linear infinite',
        squarePing3: 'squareping3 3s linear infinite',
        squarePing4: 'squareping4 3s linear infinite',
      },
    },
    screens: {
      '2xs': '350px',
      xs: '375px',
      '3xl': '1920px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
