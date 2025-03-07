import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // 320px
        "2xl": "1440px", // Ajout d'un breakpoint pour 1440px
      },
      fontFamily: {
        // police perso
        inriasans: ["Inria Sans", "serif"],
        Inter: ["Inter", "serif"],
      },
      colors: {
        paytic_primary: {
          DEFAULT: "#101828", // Correction de la syntaxe
        },
        NavBar_col: "#0E315D",
        text_navigation: "#454545",
        great_text: "#121212",
        small_text: "#4F4F4F",
        feature: "#F6F6F6",
        btn_col: "#007AFF", // Suppression de la virgule finale qui causait une erreur
      },
      animation: {
        "spin-words": "spin-words 4s infinite",
      },
      keyframes: {
        "spin-words": {
          "10%": { transform: "translateY(-102%)" },
          "25%": { transform: "translateY(-100%)" },
          "35%": { transform: "translateY(-202%)" },
          "50%": { transform: "translateY(-200%)" },
          "60%": { transform: "translateY(-302%)" },
          "75%": { transform: "translateY(-300%)" },
          "85%": { transform: "translateY(-402%)" },
          "100%": { transform: "translateY(-400%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
