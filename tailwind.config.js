/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jcg-navy': '#1a2744',
        'jcg-navy-light': '#243352',
        'jcg-gold': '#c9a84c',
        'jcg-gold-light': '#d4b86a',
        'jcg-slate': '#374151',
        'jcg-bg': '#0f1729',
        'jcg-card': '#1a2744',
        'jcg-border': '#2a3a5c',
        'risk-red': '#ef4444',
        'risk-amber': '#f59e0b',
        'risk-green': '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
