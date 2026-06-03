import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0c0e10",
          elevated: "#14171c",
          card: "#1a1e24",
        },
        surface: {
          DEFAULT: "#f4f1ec",
          muted: "#e8e4dc",
        },
        accent: {
          DEFAULT: "#c9a962",
          hover: "#dbbe78",
          dim: "rgba(201, 169, 98, 0.15)",
        },
        ink: {
          DEFAULT: "#1a1e24",
          muted: "#5c6370",
        },
        cream: "#f4f1ec",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        panel: "28px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201, 169, 98, 0.12)",
        lift: "0 8px 32px rgba(0, 0, 0, 0.35)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
