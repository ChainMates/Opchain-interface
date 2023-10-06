import { ThemeColors } from '@/libs/types';
import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const commonColors: ThemeColors =
{
  networkPolygon: '#A457FF',
  networkArbitrum: '#28A0F0',
  content1: '#3D405B',
  default: '#00000080',
  
}

export const lightThemeColors: ThemeColors =
{
  ...commonColors,


}


export const darkThemeColors: ThemeColors =
{
  ...commonColors,

  txt1: "#3D405B",
  txt2: "#6c757d",
  txt3: "#ADB5BD",
  txt4: "#ede0d4",

  sf1: "#3D405B",
  sf2: "#F4F1DE",
  sf3: "#F2CC8F",
  sf4: "#F9E5C5",
  sf5: "#DEDBCE",
  sf6: "#C7C5BE",

  primary: {
    DEFAULT: "#F2CC8F",
    foreground: "#000000",
  },
  secondary: {
    DEFAULT: "#3D405B",
    foreground: "#000000",
  },
  success: {
    DEFAULT: "#3FB68B",
    foreground: "#000000",
  },
  danger: {
    DEFAULT: "#FF5353",
    foreground: "#000000",
  },

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
