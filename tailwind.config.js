/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#00A94F',
        'brand-dark': '#00813D',
        accent: '#EF3E42',
        surface: '#F4F7F5',
        card: '#FFFFFF',
        ink: '#1E1F24',
        muted: '#5F6670'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 25px 45px rgba(0, 46, 32, 0.08)'
      }
    }
  },
  plugins: []
};
