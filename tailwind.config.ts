import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#00b2e5",
        "main-color-low-opacity": "rgb(0, 178, 229, 0.4)",
        "sec-color": "#9E3FFE",
        "input-color": "rgb(255, 255, 255, .7)"
      }
    },
  },
  plugins: [],
};
export default config;
