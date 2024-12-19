/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInCenter: "slideInCenter 1s ease-out",
        blurSlow: "blurSlow 1s ease-out",
      },
      keyframes: {
        slideInCenter: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        blurSlow: {
          "0%": { opacity: 0, filter: "blur(10px)", transform: "scale(1.1)" },
          "100%": { opacity: 1, filter: "blur(0)", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
