module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      default: ["Poppins", "sans-serif"],
      display: ["Krona One", "sans-serif"],
    },
    extend: {
      colors: {
          primary: {
            DEFAULT: "#202536",
            50: "#E7EAEE",
            100: "#CCD2DB",
            200: "#9CA8BA",
            300: "#687B97",
            400: "#455163",
            500: "#1B2027",
            600: "#15191E",
            700: "#0F1115",
            800: "#060709",
          },
          secondary: {
            DEFAULT: "#B68F40", 
            50: "#FAF3E6",
            100: "#F5E5CC",
            200: "#ECD2A3",
            300: "#E3B87A",
            400: "#DDAE5E",
            500: "#B68F40", 
            600: "#A97E36",
            700: "#8B682F",
            800: "#6D5126",
            900: "#583F20",
          },
          neutral: {
            DEFAULT: "#EEEEEE",
          },
      },
    },
    container: {
      center: true, // serves as margin-inline: auto;
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
