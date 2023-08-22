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
          200: "#ECF1E0",
          400: "#E0E9CB",
        },
        marigold: {
          200: "#FAE7CC",
        },
        ocean: {
          200: "#DEE8F6",
          400: "#2464C6",
        },
      },
    },
  },
  plugins: [],
};
