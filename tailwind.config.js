/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    letterSpacing: {
      tightest: '-.1em',
    },
    extend: {},
  },
  plugins: [],
};
