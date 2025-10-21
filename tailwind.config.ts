import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0F1115",
        magenta: "#FF1F8C",
        cyan: "#00E5FF",
        brutal: "#111111",
        film: "#BFA98A"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "noise-film": "url('/noise.png')"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 229, 255, 0.15)",
        neon: "0 0 40px rgba(255, 31, 140, 0.4)"
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.2s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(-3px)" },
          "50%": { transform: "translateY(3px)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" }
        },
        morph: {
          "0%": { borderRadius: "38% 62% 53% 47% / 41% 39% 61% 59%" },
          "50%": { borderRadius: "58% 42% 63% 37% / 49% 56% 44% 51%" },
          "100%": { borderRadius: "38% 62% 53% 47% / 41% 39% 61% 59%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
