/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/frontend/common/components/**/*.{js,ts,jsx,tsx}',
    './src/frontend/modules/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        cards: '#F1F1F1',
        viewport: '#FAFAFA',
        'primary-light': '#FBAF85',
        subtitle: '#808080',
        error: '#CD2C2C'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
}
