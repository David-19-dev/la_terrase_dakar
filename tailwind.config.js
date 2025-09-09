/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F0',
          100: '#F7F1E1',
          200: '#EFE3C3',
          300: '#E7D5A5',
          400: '#DFC787',
          500: '#D7B969',
          600: '#C6A86A',
          700: '#B2944B',
          800: '#9F812C',
          900: '#8C6D0D',
        },
        dark: {
          50: '#8D8D8D',
          100: '#777777',
          200: '#616161',
          300: '#4A4A4A',
          400: '#343434',
          500: '#1D1D1D',
          600: '#171717',
          700: '#111111',
          800: '#0A0A0A',
          900: '#050505',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/images/hero.jpg')",
        'menu-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/menu-bg.jpg')",
        'event-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/event-bg.jpg')",
        'about-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/about-bg.jpg')",
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};