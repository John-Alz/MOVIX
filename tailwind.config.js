/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Urbanist': ["Urbanist", "system-ui"]
      },
      colors: {
        'custom-gray': 'rgb(80, 76, 76)', // Add your custom color
      },
    },
  },
  plugins: [],
}

