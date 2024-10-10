import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#f5741c",
      },
    
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(135deg, rgba(0,0,0,0.8) 15%, rgba(30,15,85,0.7) 40%, rgba(50,30,140,0.8) 70%, rgba(0,0,0,0.9) 100%)",
      },
      
      
  },
  plugins: [],
  }}

export default config;
