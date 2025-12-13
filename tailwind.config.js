/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elite dark palette
        'surface': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Premium Blue accent (replacing violet)
        'accent': {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        // Warm highlight
        'highlight': '#f97316',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        // Premium gradient mesh - Blue theme
        'gradient-mesh': `
          radial-gradient(at 27% 37%, hsla(217, 91%, 60%, 0.15) 0px, transparent 50%),
          radial-gradient(at 97% 21%, hsla(210, 98%, 72%, 0.12) 0px, transparent 50%),
          radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.06) 0px, transparent 50%),
          radial-gradient(at 10% 29%, hsla(217, 96%, 67%, 0.1) 0px, transparent 50%),
          radial-gradient(at 97% 96%, hsla(217, 98%, 61%, 0.08) 0px, transparent 50%),
          radial-gradient(at 33% 50%, hsla(217, 67%, 73%, 0.06) 0px, transparent 50%),
          radial-gradient(at 79% 53%, hsla(210, 68%, 79%, 0.06) 0px, transparent 50%)
        `,
        'gradient-subtle': 'linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)',
        'gradient-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'glow': '0 0 80px -20px rgba(59, 130, 246, 0.4)',
        'glow-sm': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
        'card': '0 1px 2px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
