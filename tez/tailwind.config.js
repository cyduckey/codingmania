/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          light: '#E8DED3',
          DEFAULT: '#C4B4A4',
          dark: '#8E7B68',
        },
        natural: {
          light: '#D3D3D1',
          DEFAULT: '#9C9C98',
          dark: '#5F5F5D',
        },
        mauve: {
          light: '#E6E0F0',
          DEFAULT: '#9B88B8',
          dark: '#6B5B8F',
        },
        taupe: {
          light: '#E5DFD5',
          DEFAULT: '#B5A596',
          dark: '#7B6D5D',
        },
        mist: {
          light: '#E0E8F0',
          DEFAULT: '#8FA6B8',
          dark: '#5F7B8F',
        },
        olive: {
          light: '#E8ECE0',
          DEFAULT: '#9BA878',
          dark: '#6B8553',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}