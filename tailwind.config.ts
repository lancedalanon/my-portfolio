import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#f7f7f7",
          200: "#e1e1e1",
          300: "#cfcfcf",
          400: "#a8a8a8",
          500: "#7f7f7f",
          600: "#5e5e5e",
          700: "#3f3f3f",
          800: "#2a2a2a",
          900: "#000000",
        },
        primary: {
          DEFAULT: "#2d2f36",
          light: "#45484f",
          dark: "#1b1d22",
        },
        secondary: {
          DEFAULT: "#52575d",
          light: "#6b7075",
          dark: "#3a3f45",
        },
        accent: {
          DEFAULT: "#D4AF37",
          light: "#e1c16e",
          dark: "#b38b2a",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#B91C1C",
        },
        success: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&': {
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&': {
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          },
        },
      });
    }),
  ],
};

export default config;
