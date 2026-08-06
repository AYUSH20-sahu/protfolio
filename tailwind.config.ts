import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        panel: "rgba(255,255,255,0.06)",
        line: "rgba(255,255,255,0.12)",
        text: "#ecf2ff",
        muted: "#9aa7c7",
        accent: "#7c8cff",
        accent2: "#4de1c1"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,140,255,0.35)",
        soft: "0 20px 80px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
