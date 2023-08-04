import { colorsLight } from "./colorsLight";
import { ThemeName } from "./themeName";
import { DSTheme } from "./types";

export const themes: { [key: string]: DSTheme } = {
  [ThemeName.LIGHT]: {
    colors: colorsLight,
  },
};
