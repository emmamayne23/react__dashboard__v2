/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary_dark: "#02457A",
        primary: "#0081A7",
        secondary_dark: "#001B48",
        secondary: "#00AFB9",
        tertiary: "#053F5C",
        overlay: "#00000080",
      },
      screens: {
          sm: "640px",
          sm_md: "696px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          xxl: "1536px",
      },
      width: {
        "mobile-width": "270px"
      }
    },
  },
  plugins: [],
};
