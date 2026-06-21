/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F8F7F4',     // 70% primary background
          white: '#FFFFFF',     // 70% card canvas
          charcoal: '#1E1E1E',  // 20% primary text
          forest: '#1F5A3D',    // 8% primary accent
          gold: '#C48A4A',      // 2% secondary accent
          beige: '#EAE4D9',     // borders and dividers
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
