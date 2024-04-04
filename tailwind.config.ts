import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors similar to the interface
        background: '#F7F7F7',
        text: '#333333',
        sidebar: '#EDEDED',
        accent: '#FFD700', // Example accent color
      },
    },
  },
  plugins: [],
};

export default config;
