/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark03: 'var(--Dark-03)',
        dark12: 'var(--Dark-12)',
        dark08: 'var(--Dark-08)',
        dark06: 'var(--Dark-06)',
        dark20: 'var(--Dark-20)',
        dark30: 'var(--Dark-30)',
        white: 'var(--Absolute-White)',
        grey40: 'var(--Grey-40)',
        grey50: 'var(--Grey-50)',
        grey70: 'var(--Grey-70)',
        grey80: 'var(--Grey-80)',
        grey90: 'var(--Grey-90)',
        grey95: 'var(--Grey-95)',
        purple55: 'var(--Purple-55)',
        purple90: 'var(--Purple-90)',
      },
      spacing: {
        120: '120px',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': '72px',
      },
      lineHeight: {
        tight: 1.2,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 