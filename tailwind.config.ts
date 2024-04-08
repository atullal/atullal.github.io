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
        "neutral-50": "#fcf1db",
        "neutral-200": "#ddc89f",
        "neutral-500": "#96876a"
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
export default config;
