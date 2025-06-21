/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f0',
          100: '#eef0e0',
          200: '#dde2c2',
          300: '#c8d19e',
          400: '#b4c17d',
          500: '#9db060',
          600: '#808a4a',
          700: '#656b3c',
          800: '#525633',
          900: '#46492d',
          950: '#242615',
        },
      },
    },
  },
  plugins: [],
};