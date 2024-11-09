/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Custom extra-small breakpoint at 480px
      },
    },
  },
  variants: {
    extend: {
      margin: ['xs'], // Ensure xs variant is available for margin if needed
      padding: ['xs'],
    },
  },
  plugins: [],
}



