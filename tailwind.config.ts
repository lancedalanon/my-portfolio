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
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1vw + 0.5rem, 1rem)', // Extra small text
        'fluid-sm': 'clamp(0.875rem, 1.2vw + 0.5rem, 1.125rem)', // Small text
        'fluid-base': 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)', // Base text (normal)
        'fluid-lg': 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)', // Large text
        'fluid-xl': 'clamp(1.25rem, 2.5vw + 0.5rem, 1.75rem)', // Extra large text
        'fluid-2xl': 'clamp(1.5rem, 3vw + 0.5rem, 2rem)', // 2xl text
        'fluid-3xl': 'clamp(1.875rem, 4vw + 0.5rem, 2.5rem)', // 3xl text
        'fluid-4xl': 'clamp(2.25rem, 5vw + 0.5rem, 3rem)', // 4xl text
        'fluid-5xl': 'clamp(3rem, 6vw + 0.5rem, 4rem)', // 5xl text
        'fluid-6xl': 'clamp(3.75rem, 7vw + 0.5rem, 5rem)', // 6xl text
        'fluid-7xl': 'clamp(4.5rem, 8vw + 0.5rem, 6rem)', // 7xl text
        'fluid-8xl': 'clamp(6rem, 9vw + 0.5rem, 8rem)', // 8xl text
        'fluid-9xl': 'clamp(8rem, 10vw + 0.5rem, 10rem)', // 9xl text
      },
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
          DEFAULT: "#2d2f36", // Neutral dark gray
          light: "#45484f",   // Lighter gray
          dark: "#1b1d22",    // Darker gray
        },
        secondary: {
          DEFAULT: "#52575d",  // Lighter neutral gray
          light: "#6b7075",    // Light gray
          dark: "#3a3f45",     // Darker gray
        },
        // Gold accents for calls to action
        accent: {
          DEFAULT: "#D4AF37",  // Gold (warm)
          light: "#e1c16e",    // Light gold
          dark: "#b38b2a",     // Darker gold
        },
        // Introduce teal for cool contrast
        tertiary: {
          DEFAULT: "#2CA5A5",  // Teal (cool contrast)
          light: "#38cfd3",    // Light teal
          dark: "#207070",     // Dark teal
        },
        warning: {
          DEFAULT: "#F59E0B",  // Orange (warm warning)
          light: "#FBBF24",
          dark: "#D97706",
        },
        error: {
          DEFAULT: "#EF4444",  // Red for errors
          light: "#F87171",
          dark: "#B91C1C",
        },
        success: {
          DEFAULT: "#10B981",  // Green for success
          light: "#34D399",
          dark: "#059669",
        },
        background: "var(--background)",   // Using custom CSS variables
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
      extend: {
        animation: {
          blink: 'blink 0.8s infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
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
