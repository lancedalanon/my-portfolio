import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom greyish black shades and theme colors
      colors: {
        // Greyish black palette for dark theme
        custom: {
          100: "#f7f7f7",  // Lightest shade
          200: "#e1e1e1",  // Light grey
          300: "#cfcfcf",  // Mid-tone grey
          400: "#a8a8a8",  // Darker grey
          500: "#7f7f7f",  // Neutral grey
          600: "#5e5e5e",  // Dark grey
          700: "#3f3f3f",  // Very dark grey
          800: "#2a2a2a",  // Near black
          900: "#000000",  // Pure black
        },
        // Defining key colors for the design system
        primary: {
          DEFAULT: "#2d2f36",  // A greyish-black tone for primary elements
          light: "#45484f",
          dark: "#1b1d22",
        },
        secondary: {
          DEFAULT: "#52575d",  // A soft greyish tone for secondary elements
          light: "#6b7075",
          dark: "#3a3f45",
        },
        accent: {
          DEFAULT: "#D4AF37",  // Muted gold for accent
          light: "#e1c16e",    // Lighter gold
          dark: "#b38b2a",     // Darker gold
        },
        warning: {
          DEFAULT: "#F59E0B",  // Bright yellow for warning
          light: "#FBBF24",
          dark: "#D97706",
        },
        error: {
          DEFAULT: "#EF4444",  // Strong red for errors
          light: "#F87171",
          dark: "#B91C1C",
        },
        success: {
          DEFAULT: "#10B981",  // Green for success states
          light: "#34D399",
          dark: "#059669",
        },
        background: "var(--background)",  // Background from CSS variable
        foreground: "var(--foreground)",  // Foreground from CSS variable
      },
    },
  },
  plugins: [],
};

export default config;
