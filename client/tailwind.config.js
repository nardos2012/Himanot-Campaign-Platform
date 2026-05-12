/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",     // teal blue
        primaryLight: "#14b8a6",
        primaryDark: "#115e59",
        whiteGloss: "#f9fafb",
        accent: "#06b6d4",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(20,184,166,0.3)",
      },
    },
  },
  plugins: [],
};