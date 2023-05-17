/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-400": "#2C3B59",
        "blue-300": "#344373",
        "blue-200": "#2E7B8C",
        "blue-100": "#C4D0F2",
        blueLight: "#2E7B8C",
        yellow: "#D9AA1E",
        yellowLight: "#F2CD88",
        brown: "#59342C",
      },
    },
  },
  plugins: [],
};
