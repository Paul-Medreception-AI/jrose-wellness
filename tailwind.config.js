/** @type {import("tailwindcss").Config} */
// Brand palette. Keep these hex values in sync with the :root tokens in app/globals.css.
// accent (rose-wine) is for CTA buttons and small accents only, never a large section background.
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#531F26",
        dark: "#2E0F13",
        ink: "#2E0F13",
        // bg-accent, hover:bg-accent-dark
        accent: { DEFAULT: "#913F4A", dark: "#7A3440" },
        light: "#F4EBEB",
        peach: "#F8DACF",
        cream: "#FEFAF0",
        sage: "#495450",
        muted: "#6B5A5D",
        border: "#EADBD6",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
module.exports = config;
