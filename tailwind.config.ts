import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "header-container": "1529px",
        container: "1819px",
      },
      gridTemplateColumns: {
        header: "36% 64%",
      },
      colors: {
        primary: "#8100FF",
        white: "#F0F0F0",
        yellow: "#F2994A",
        cyan: "#2CD7FF",
        grey: "#727272",
        card: "#BFBFBF",
      },
      fontFamily: {
        main: "var(--font-main)",
        manrope: "var(--font-manrope)",
        headline: "var(--font-headline)",
      },
    },
  },
  plugins: [],
}
export default config
