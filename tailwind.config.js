/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jcg-navy': '#19314A',
        'jcg-navy-dark': '#0F2035',
        'jcg-charcoal': '#2F3A45',
        'jcg-steel': '#88939F',
        'jcg-accent': '#3A7CA5',
        'jcg-accent-hover': '#2D6488',
        'jcg-gold': '#C8A951',
        'jcg-gold-hover': '#B59541',
        'jcg-bg': '#FFFFFF',
        'jcg-bg-light': '#F5F6F8',
        'jcg-bg-warm': '#FAFAF9',
        'jcg-border': '#E0E2E6',
        'jcg-border-light': '#ECEDF0',
        'jcg-text': '#353535',
        'jcg-text-secondary': '#5C6370',
        'jcg-text-light': '#88939F',
        'risk-red': '#C44',
        'risk-amber': '#E8960C',
        'risk-green': '#2D8A4E',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'jcg-sm': '6px',
        'jcg-md': '10px',
        'jcg-lg': '16px',
      },
      boxShadow: {
        'jcg-sm': '0 1px 3px rgba(25, 49, 74, 0.06)',
        'jcg-md': '0 4px 12px rgba(25, 49, 74, 0.08)',
        'jcg-lg': '0 8px 30px rgba(25, 49, 74, 0.10)',
        'jcg-card': '0 2px 8px rgba(25, 49, 74, 0.06)',
      },
    },
  },
  plugins: [],
};
