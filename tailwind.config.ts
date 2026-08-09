import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#05060c",
          900: "#090c16",
          800: "#0e1220",
          700: "#141a2e",
          600: "#1c2440",
          500: "#28325a",
        },
        cyan: {
          glow: "#5eead4",
          DEFAULT: "#4deaff",
        },
        ink: {
          blue: "#5b8def",
        },
        violet: {
          DEFAULT: "#a78bfa",
        },
        amber: {
          DEFAULT: "#ffc857",
        },
        leaf: {
          DEFAULT: "#6ee7a0",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "pixel-xs": ["0.55rem", { lineHeight: "1.6" }],
        "pixel-sm": ["0.65rem", { lineHeight: "1.7" }],
        "pixel-base": ["0.8rem", { lineHeight: "1.8" }],
        "pixel-lg": ["1.05rem", { lineHeight: "1.8" }],
        "pixel-xl": ["1.6rem", { lineHeight: "1.7" }],
        "pixel-2xl": ["2.2rem", { lineHeight: "1.6" }],
      },
      boxShadow: {
        pixel: "4px 4px 0 0 rgba(0,0,0,0.55)",
        "pixel-sm": "2px 2px 0 0 rgba(0,0,0,0.55)",
        "pixel-cyan": "4px 4px 0 0 #4deaff55",
        "pixel-inset": "inset 2px 2px 0 0 rgba(255,255,255,0.06), inset -2px -2px 0 0 rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(93,234,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(93,234,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      keyframes: {
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        "float-tiny": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "pixel-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "sprite-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "float-tiny": "float-tiny 3s ease-in-out infinite",
        "pixel-in": "pixel-in 0.4s steps(6) forwards",
        scanline: "scanline 8s linear infinite",
        "sprite-bob": "sprite-bob 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
