/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0fa9e6", // primary
          light: "#3fbaeb", // will be primary-light
          dark: "#0c87b8" // will be primary-dark
        },
        secondary: {
          DEFAULT: "#0fa9e6", // secondary
          light: "#3fbaeb", // will be secondary-light
          dark: "#0c87b8" // will be secondary-dark
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [],
}
