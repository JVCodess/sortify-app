// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Ensure components folder is included
    './app/**/*.{js,ts,jsx,tsx}', // Ensure app folder is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
