import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "8px 7px 14px 0px rgba(190,190,190,0.2)",
        customLight: "8px 7px 14px 0px #00000024",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
