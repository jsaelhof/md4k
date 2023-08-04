import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeContextConfig } from "./types";
import { createStitches } from "@stitches/react";
import { themes, ThemeName, mediaQueries } from "../theme";

// The default state of the theme provider context.
const themeContext = createContext<ThemeContextConfig>({
  setTheme: () => null,
  theme: themes[ThemeName.LIGHT],
  themeName: ThemeName.LIGHT,
  themeClass: undefined,
});

const { createTheme } = createStitches({
  theme: {},
  media: mediaQueries,
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  // The name of the ucrrent theme, such as "light"
  const [themeName, setThemeName] = useState<ThemeName>(ThemeName.LIGHT);

  // The raw theme object, keyed by the themeName.
  // This is an object containing colors, spacing, radii etc.
  const theme = useMemo(() => themes[themeName], [themeName]);

  // The stitichesTheme object created from the raw theme object.
  const stitchesTheme = useMemo(() => createTheme(theme), [theme]);

  // The css class containing all the pre-built stitches css classes.
  // This is provided to a div that wraps the app to provide the definitions.
  const { className } = stitchesTheme;

  // The ThemeContextConfig is the context of the theme provider.
  // It includes
  // setTheme: a function to change the theme by providing a theme name (string).
  // theme: the raw theme object. This can be useful on the consumer to expose the theme to things like styled components or other JSS styling solutions.
  // themeName: the string name of the current theme.
  // themeClass: this is provided so that components that are portalled outside the theme provider div can wrap their rendered content in the theme. For example, a dialog or popover could useTheme to get the class and wrap it's rendered output with the required styles.
  const state: ThemeContextConfig = useMemo(
    () => ({
      setTheme: (themeBase: ThemeName) => {
        setThemeName(themeBase);
      },
      theme,
      themeName,
      themeClass: className,
    }),
    [className, theme, themeName]
  );

  return (
    <themeContext.Provider value={state}>
      <div className={className}>{children}</div>
    </themeContext.Provider>
  );
};

export const useTheme = (): ThemeContextConfig => useContext(themeContext);
