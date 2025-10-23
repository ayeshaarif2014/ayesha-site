
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        primary: "#19E6E6",
        accent: "#FF4ECD",
        soft: "#EAF2F7",
        slateTxt: "#94A3B8",
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
}
export default config
