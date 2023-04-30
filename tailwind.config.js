/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%, 75%": { transform: "translateY(-10px) " },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave 4s ease-in-out infinite alternate-reverse",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
