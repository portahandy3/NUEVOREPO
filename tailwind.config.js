/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Colores basados en variables CSS (los definimos en globals.css) */
        bg:        "rgb(var(--bg) / <alpha-value>)",
        surface:   "rgb(var(--surface) / <alpha-value>)",
        surface2:  "rgb(var(--surface-2) / <alpha-value>)",
        brand:     "rgb(var(--brand) / <alpha-value>)",
        brand2:    "rgb(var(--brand-2) / <alpha-value>)",
        brand3:    "rgb(var(--brand-3) / <alpha-value>)",
        hi1:       "rgb(var(--highlight-1) / <alpha-value>)",
        hi2:       "rgb(var(--highlight-2) / <alpha-value>)",
        text:      "rgb(var(--text) / <alpha-value>)",
        dim:       "rgb(var(--text-dim) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--brand)/.50), 0 16px 38px -12px rgb(var(--brand-2)/.45)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(80% 60% at 50% 0%, rgba(var(--brand-2)/.18), transparent 60%), linear-gradient(180deg, rgba(var(--bg)/1) 0%, rgba(var(--bg)/.96) 55%, rgba(var(--bg)/.98) 100%)",
      },
    },
  },
  plugins: [],
};
