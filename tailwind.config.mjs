/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1a2342',
          950: '#0a192f',
        },
        red: {
          400: '#f87171',
          500: '#e63946',
          600: '#d62839',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        section: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        section: '5rem',
        container: '1200px',
      },
    },
  },
  plugins: [],
}
