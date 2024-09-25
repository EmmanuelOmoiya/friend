/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["NeueHaasGrotesk", "sans-serif", "system-ui"],
        groteskMedium: ["NeueHaasGroteskMedium", "sans-serif", "system-ui"],
        groteskBold: ["NeueHaasGroteskBold", "sans-serif", "system-ui"],
      }
    },
  },
  plugins: [],
}

