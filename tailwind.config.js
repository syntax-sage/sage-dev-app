/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    "ease-in-out":"transition-timing-function: ease-in-out",
    colors: {
      "transparent":"transparent",
      "light": "#BEC8CF",
      "dark": "#111111",
      "medium": "#222222",
      "red": "#BF4055",
      "orange": "#BF7540",
      "pink": "#BF40BF",      
      "var-light": "var(--var-light)",
      "var-dark": "var(--var-dark)",
      "var-medium": "var(--var-medium)",
      "var-red": "var(--var-red)",
      "var-orange": "var(--var-orange)",
      "var-pink": "var(--var-pink)",
    },
    extend: {
    },
  },
  plugins: [],
}