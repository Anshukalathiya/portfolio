/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // blue-500
          DEFAULT: '#2563EB', // blue-600
          dark: '#1D4ED8', // blue-700
        },
        secondary: {
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#1E40AF', // blue-800
        },
        background: {
          light: '#F0F6FF', // very light blue
          DEFAULT: '#E0E7EF', // light blue-gray
          dark: '#0F172A', // slate-900 (for dark mode)
        },
        darkbg: {
          DEFAULT: '#181A20', // custom light black for dark mode
          light: '#23272F',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-0': 'rotateY(0deg)',
        'y-90': 'rotateY(90deg)',
        'y-180': 'rotateY(180deg)',
        '-y-90': 'rotateY(-90deg)',
        'x-90': 'rotateX(90deg)',
        '-x-90': 'rotateX(-90deg)',
      },
      translate: {
        'z-80': 'translateZ(80px)',
        '-z-80': 'translateZ(-80px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

