import type { Config } from 'tailwindcss';

export default {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'grid-cols-1',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'xl:grid-cols-4',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f75c2',
        darkBg: '#121212',
        lightBg: '#f8f9fa',
      },
    },
  },
  plugins: [],
} satisfies Config;
