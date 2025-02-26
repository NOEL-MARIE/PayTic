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
        'xs': '320px',  // 320px        
        '2xl': '1440px', // Ajout d'un breakpoint pour 1440px

      },
      fontFamily: {
        // police perso
        inriasans: ["--font-inria-sans "],
        Inter: ["--font-Inter "],

      },
      colors: {
        paytic_primary: {
          DEFAULT: "#101828", // Correction de la syntaxe
        },
        NavBar_col:"#0E315D",
        text_navigation: "#454545",
        great_text: "#121212",
        small_text: "#4F4F4F",
        feature: "#F6F6F6",
        btn_col: "#007AFF" // Suppression de la virgule finale qui causait une erreur
      },
    },
  },
  plugins: [],
} satisfies Config;
