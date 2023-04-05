import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Bebas Neue', sans-serif`,
  body: `'DM Sans', sans-serif`,
};

const components = {
  Button: {
    variants: {
      primary: {
        backgroundColor: "brand.primary",
        borderRadius: "6px",
        fontWeight: "normal",
        color: "brand.white",
      },
      ghost: {
        backgroundColor: "none",
        _hover: {
          backgroundColor: "brand.dark",
          color: "blue.100",
        },
      },
    },
  },
};

export const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: "100vw",
        overflowX: "hidden",
        color: "brand.dark",
        backgroundColor: "brand.white",
      },
    },
  },
  colors: {
    brand: {
      primary: "#EF233C",
      secondary: "#E74260",
      card: "#8D99AE",
      dark: "#2b2d42",
      txt: "#2b2d42",
      light: "#8D99AE",
      white: "#EDF2F4",
      100: "#DDDDDD",
    },
  },
  fonts: {
    ...fonts,
  },
  components: {
    ...components,
  },
});

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: "100vw",
        overflowX: "hidden",
        color: "brand.white",
        backgroundColor: "brand.dark",
      },
    },
  },
  colors: {
    brand: {
      primary: "#EF233C",
      secondary: "#E74260",
      card: "#2C3349",
      dark: "#2b2d42",
      txt: "#EDF2F4",
      light: "#8D99AE",
      white: "#EDF2F4",
      100: "#DDDDDD",
    },
  },
  fonts: {
    ...fonts,
  },
  components: {
    ...components,
  },
});
