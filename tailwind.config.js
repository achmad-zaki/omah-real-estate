/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ["poppins", "sans-serif"]
    },
    extend: {
      colors: {
        "primary": "#F58634",
        "secondary": "#1B2021",
        "bone": "#FCFCFC"
      },
    },
  },
  plugins: [],
}

