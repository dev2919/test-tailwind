/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        primary: {
          50: "#024569",
          100: "#b5def0",
          200: "#8ccce6",
          300: "#68badf",
          400: "#4da8d5",
          500: "#3d8cb8",
          600: "#2d6a8a",
          700: "#1d485f",
          800: "#012a38",
          900: "#040f13"
        }
      },
      neutral: {
        50: "#f4f5f7",
        100: "#2592ff",
        200: "#d6dadf",
        300: "#bac1c9",
        400: "#96a0ac",
        500: "#6e7a87",
        600: "#4d5966",
        700: "#374049",
        800: "#22262b",
        900: "#374049"
      },
      info: {
        50: "#eff5f5",
        100: "#d0e0e1",
        200: "#b1cbce",
        300: "#92b6ba",
        400: "#73a1a6",
        500: "#59888c",
        600: "#456a6d",
        700: "#314b4e",
        800: "#1e2d2f",
        900: "#0a0f10"
      },
      red: {
        50: "#fce9e9",
        100: "#f5bdbc",
        200: "#c30401",
        300: "#e86564",
        400: "#e13837",
        500: "#c81f1e",
        600: "#9b1817",
        700: "#6f1111",
        800: "#430a0a",
        900: "#160303"
      },
      orange: {
        50: "#feefe7",
        100: "#fbceb6",
        200: "#f9ad86",
        300: "#f68d55",
        400: "#f46c25",
        500: "#da530b",
        600: "#aa4009",
        700: "#792e06",
        800: "#491c04",
        900: "#180901"
      },
      base: {
        white: "#ffffff",
        black: "#000000"
      },
      brand: {
        primary: "#ff3300",
        secondary: "#012a38",
        accent: "#bff90b",
        neutral: "#d0e0e1"
      },
      fontFamilies: {
        sora: "Sora",
        inter: "Inter"
      },
      lineHeights: {
        0: 45.62,
        1: 39.64,
        2: 35.24,
        3: 31.33,
        4: 22,
        5: 19.56
      },
      fontWeights: {
    "sora_0": "Light",
    "sora_1": "SemiBold",
    "inter_2": "Regular"
      },
      fontSize: {
        0: 14.22,
        1: 16,
        2: 22.784,
        3: 25.63,
        4: 28.83,
        5: 36.496
      },
      letterSpacing: {
        0: "0%"
      },
      paragraphSpacing: {
        0: 0
      },
      display: {
        fontFamily: "Sora",
        fontWeight: "Light",
        lineHeight: "46px",
        fontSize: "36.495px",
        letterSpacing: "",
        paragraphSpacing: "",
        paragraphIndent: "",
        textCase: "",
        textDecoration: ""
      },
  "heading_1": {
        fontFamily: "Sora",
        fontWeight: "SemiBold",
        lineHeight: 39.64,
        fontSize: 28.83,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "heading_2": {
        fontFamily: "Sora",
        fontWeight: "SemiBold",
        lineHeight: 35.24,
        fontSize: 25.63,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
  "heading_3": {
        fontFamily: "Sora",
        fontWeight: "SemiBold",
        lineHeight: 31.33,
        fontSize: 22.784,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      copyLarge: {
        fontFamily: "Inter",
        fontWeight: "Regular",
        lineHeight: 22,
        fontSize: 16,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      copyRegular: {
        fontFamily: "Inter",
        fontWeight: "Regular",
        lineHeight: 19.56,
        fontSize: 14.22,
        letterSpacing: "0%",
        paragraphSpacing: 0,
        paragraphIndent: "0px",
        textCase: "none",
        textDecoration: "none"
      },
      textCase: {
        none: "none"
      },
      textDecoration: {
        none: "none"
      },
      paragraphIndent: {
        0: "0px"
      },
      tokenSetOrder: {
        0: "cb"
      }
    },
  },
}
