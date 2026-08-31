/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          elevated: '#0A0A0C',
          card: '#0D0D0F',
          'card-hover': '#111114',
        },
        border: {
          subtle: '#1C1C20',
          hover: '#2A2A30',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#9A9A9A',
          tertiary: '#71717A',
        },
        accent: {
          DEFAULT: '#0066FF',
          hover: '#1A75FF',
          glow: '#0066FF1A',
          text: '#4D94FF',
        },
        success: '#00C853',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        button: '8px',
        badge: '20px',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'bounce-arrow': 'bounce-arrow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.4' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
