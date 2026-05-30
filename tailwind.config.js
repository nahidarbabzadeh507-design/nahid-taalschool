/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#11223f",
        ink: "#172033",
        cream: "#f7f1e6",
        linen: "#fbf8f1",
        gold: "#c79a44",
        mist: "#e8edf3"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17,34,63,.12)"
      }
    }
  },
  plugins: []
};
