/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0c14',
          850: '#0d0f1a',
          800: '#111420',
          750: '#161a2b',
          700: '#1c2033',
          600: '#262b42',
          500: '#3a3f5c',
        },
        accent: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdbff',
          300: '#8ec5ff',
          400: '#58a6ff',
          500: '#2f8fff',
          600: '#1a75f0',
          700: '#155fd1',
          800: '#154fa6',
          900: '#164484',
        },
        violet2: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.8s ease both',
        'scale-in': 'scaleIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlow 12s ease-in-out infinite',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
