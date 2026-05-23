import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:    '#8F40F4',
          violet:    '#7850EC',
          blue:      '#6169E3',
          sky:       '#60CCF9',
          navy:      '#272351',
          'navy-80': 'rgba(39,35,81,0.8)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Brandon Grotesque', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8F40F4 0%, #7850EC 30%, #6169E3 60%, #60CCF9 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #7A2FE0 0%, #6640D8 30%, #5058CC 60%, #4ABDE8 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
