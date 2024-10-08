/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "amazon-media": "url('/images/amazon-media.png')",
        "amazon-media-logo": "url('/images/amazon-media-logo.png')",
      },
      maxWidth: {
        375: "93.75rem",
        370: "92.5rem",
        250: "62.5rem",
      },
      spacing: {
        19: "4.75rem",
        50: "12.5rem",
        57.5: "14.375rem",
        94: "23.5rem",
        150: "37.5rem",
      },
      colors: {
        "clr-primary": "#0F1111",
        "clr-secondary": "#232F3E",
        "clr-bg-main-1": "#131921",
        "clr-bg-main-2": "#131A22",
        "clr-grey-1": "#CCC",
        "clr-grey-2": "#DDD",
        "clr-grey-3": "#999",
        "clr-bg-grey-1": "#E3E6E6",
        "clr-bg-grey-2": "#E6E6E6",
        "clr-bg-fade": "rgba(15,17,17, 0.03)",
        "clr-bg-yellow": "#FEBD69",
        "clr-deal": "#CC0C39",
        "clr-link": "#007185",
        "clr-link-hover": "#C7511F",
        "clr-scroll-thumb": "#aaa",
      },
    },
  },
  plugins: [],
};
