/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        cards: '#F1F1F1',
        viewport: '#FAFAFA',
        'primary-contrast': '#FBAF85',
        'secondary-contrast': '#000000',
        'cards-contrasts': '#FFFFFF'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
}
