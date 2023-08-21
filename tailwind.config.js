/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        avocado: {
          400: "#E0E9CB",
        },
        marigold: {
          200: "#FAE7CC",
        },
      },
    },
  },
  plugins: [],
};
