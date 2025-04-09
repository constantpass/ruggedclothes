/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        notice: 'rgb(var(--color-accent) / <alpha-value>)',
        shopPay: 'rgb(var(--color-shop-pay) / <alpha-value>)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(34, 197, 94, 0.9)'
          },
        },
      },
    },
    screens: {
      sm: '32em',
      md: '48em',
      lg: '64em',
      xl: '80em',
      '2xl': '96em',
      'sm-max': {max: '48em'},
      'sm-only': {min: '32em', max: '48em'},
      'md-only': {min: '48em', max: '64em'},
      'lg-only': {min: '64em', max: '80em'},
      'xl-only': {min: '80em', max: '96em'},
      '2xl-only': {min: '96em'},
    },
  },
  plugins: [],
}