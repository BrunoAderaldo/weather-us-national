import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      backgroundLight: "#F8F9FD",
      backgroundLight2: "#F0F4F7",
      primary: "#7D7D90",
      secondary: "#33286D",
      placeholder: "#9D9EB6",
      separator: "#F7F8FC",
      accent: "#161763",
    },
    space: {
      1: "2px",
      2: "4px",
      3: "6px",
      4: "8px",
      5: "12px",
      6: "16px",
      7: "40px",
    },
    fonts: {
      general: "Poppins, sans-serif",
    },
    fontSizes: {
      1: "6px",
      2: "8px",
      3: "10px",
      4: "12px",
      5: "14px",
      6: "16px",
      7: "18px",
      8: "20px",
      9: "22px",
      10: "24px",
      11: "26px",
      12: "28px",
      13: "30px",
      14: "36px",
    },
    fontWeights: {
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    letterSpacings: {
      default: "-1px",
    },
    radii: {
      borderRadius: "6px",
    },
    // TODO: add shadow
    shadows: {
      default: "0px 4px 2px 0px rgb(0 0 0 / 3%)",
    },
  },
  media: {
    bp1: "(min-width: 375px)",
    bp2: "(min-width: 640px)",
    bp3: "(min-width: 768px)",
    bp4: "(min-width: 1024px)",
    bp5: "(min-width: 1280px)",
  },
});

const globalStyles = globalCss({
  "*, *::before, *::after": {
    fontFamily: "$general",
    fontWeight: "$regular",
    boxSizing: "border-box",
  },
  "::placeholder, input": {
    color: "$placeholder",
    fontSize: "$5",
    fontWeight: "$regular",
  },
  "html, body": {
    margin: "0",
    padding: "0",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeSpeed",
    background: "$backgroundLight",
  },
  body: {
    color: "$primary",
    minHeight: "100vh",
    paddingTop: "$7",
  },
  h1: {
    color: "$accent",
    fontFamily: "$general",
    fontSize: "$7",
    fontWeight: "$bold",
    margin: "0 0 $5",
    "@bp1": {
      fontSize: "$9",
    },
  },
  strong: {
    color: "$accent",
    fontWeight: "$semiBold",
  },
  label: {
    display: "block",
    fontSize: "$5",
    marginBottom: "$3",
    "@bp1": {
      fontSize: "$6",
    },
  },
  input: {
    border: 0,
    boxShadow: "$default",
    borderRadius: "$borderRadius",
    color: "$accent",
    padding: "$5",
    height: "40px",
    width: "100%",
    marginRight: "$5",
  },
  button: {
    cursor: "pointer",
    transition: "all 0.25s ease-in-out",
    "&[disabled]": {
      cursor: "not-allowed",
      opacity: "0.5",
    },
  },
  svg: {
    fill: "$primary",
  },
  "@font-face": [
    {
      fontFamily: "Poppins",
      src: `url("/static/font/Poppins-Regular.ttf") format("truetype")`,
      fontWeight: "400",
      fontStyle: "normal",
    },
    {
      fontFamily: "Poppins",
      src: `url("/static/font/Poppins-Medium.ttf") format("truetype")`,
      fontWeight: "500",
      fontStyle: "normal",
    },
    {
      fontFamily: "Poppins",
      src: `url("/static/font/Poppins-SemiBold.ttf") format("truetype")`,
      fontWeight: "600",
      fontStyle: "normal",
    },
    {
      fontFamily: "Poppins",
      src: `url("/static/font/Poppins-Bold.ttf") format("truetype")`,
      fontWeight: "700",
      fontStyle: "normal",
    },
  ],
});

globalStyles();
