/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        small: '10px',
      },
      spacing: {
        graph: '456px',
        small: '300px',
        'graph-small': '221px',
      },
    },
  },
  plugins: [],
};
