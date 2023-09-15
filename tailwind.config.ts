import { ThemeColors } from '@/libs/types';
import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const commonColors: ThemeColors =
{
  networkPolygon: '#A457FF',
  networkArbitrum: '#28A0F0',
  // content1: 'transparent',
  // default: '#15141e5f',
}

export const lightThemeColors: ThemeColors =
{
  ...commonColors,
  bg: "white",
  txt1: "black",
  txt2: "black",
}


export const darkThemeColors: ThemeColors =
{
  ...commonColors,
  bg: "#0f172a",
  txt1: "#f6f7f7",
  txt2: "#8a898d",
  txt3: "#6F6E84",
  txt4: "#8c8ba3",
  sf1: "#15141eef",
  sf2: "#0d0f1fd4",
  sf3: "#0d0f1f2f",
  sf4: "#0d0f1f0f",
  sf5: "#26202f",
  // primary: {
  //   DEFAULT: "#BEF264",
  //   foreground: "#000000",
  // },
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['vazir',],
        'boo': ['boo',],
      }
    }
  },
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)a
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: lightThemeColors, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: darkThemeColors, // dark theme colors
      },
      // ... custom themes
    },

  }),],
}
export default config
