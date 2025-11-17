/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#1A873A',
        'brand-dark': '#0f6127',
        accent: '#B8000B',
        surface: '#070B0C',
        card: '#12171A'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 25px 45px rgba(0,0,0,0.45)'
      }
    }
  },
  plugins: []
};
