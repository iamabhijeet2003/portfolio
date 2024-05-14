/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors')
const themes = require('./src/utils/themes')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'roboto-mono': ['Roboto Mono', 'monospace']
      }
    }
  },
  plugins: [createThemes(themes)]
}

