import { ThemeName } from "../../theme";
import { DSTheme } from "../../theme/types";

export type ThemeContextConfig = {
  setTheme: (themeBase: ThemeName) => void;
  theme: DSTheme;
  themeName: ThemeName;
  themeClass?: string;
};
