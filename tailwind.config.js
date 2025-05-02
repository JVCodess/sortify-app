/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--text-color)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Ensure Poppins is set here
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      fontSize: {
        base: "var(--font-size)",
      },
    },
  },
}
