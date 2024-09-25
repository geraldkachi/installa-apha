import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      zilla: ["Zilla Slab", "serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#002620",
          200: "#005244",
          300: "#00816B",
        },
        secondary: "#EFFF3D",
        background: "#f1f7f6",
      },
    },
  },
  plugins: [],
};
export default config;
