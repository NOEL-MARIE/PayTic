import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paytic_primary: {
          DEFAULT: "#101828", // Correction de la syntaxe
        },
        text_navigation: "#454545",
        great_text: "#121212",
        small_text: "#4F4F4F",
        btn_col: "#007AFF" // Suppression de la virgule finale qui causait une erreur
      },
    },
  },
  plugins: [],
} satisfies Config;
