/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palette professionnelle bleu / blanc / gris
        ink: {
          50: "#f4f7fb",
          100: "#e7edf5",
          200: "#c9d7e7",
          300: "#9fb4cf",
          400: "#6d87ab",
          500: "#4a638a",
          600: "#354c6e",
          700: "#293c58",
          800: "#1b2a41",
          900: "#0f1c2e",
          950: "#080f1c",
        },
        accent: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#b3d2ff",
          300: "#7fb2ff",
          400: "#4a8bff",
          500: "#2266ff",
          600: "#144fe0",
          700: "#123fb0",
          800: "#123689",
          900: "#132f6e",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, #e7edf5 1px, transparent 1px), linear-gradient(to bottom, #e7edf5 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, #1b2a41 1px, transparent 1px), linear-gradient(to bottom, #1b2a41 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(15, 28, 46, 0.25)",
        "card-dark": "0 8px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
