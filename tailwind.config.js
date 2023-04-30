/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%, 75%": { transform: "translateY(-10px) " },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave 4s ease-in-out infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
