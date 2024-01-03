import {
  Color,
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";

// Module Augmentation: Extend the interfaces used in the theme
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColorOptions;
    darkBlue: Partial<Color>;
    darkGrey: Partial<Color>;
    accent: string;
    icon: string;
    foundation: string;
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    darkBlue: Partial<Color>;
    darkGrey: Partial<Color>;
    accent: string;
    icon: string;
    foundation: string;
  }

  interface ZIndex {
    actionBar?: number;
    stickyBar: number;
    movieHover: number;
    titleBar: number;
    expandedBackdrop: number;
    expandedContent: number;
    trailer: number;
  }

  interface ZIndexOptions {
    actionBar?: number;
    stickyBar: number;
    movieHover: number;
    titleBar: number;
    expandedBackdrop: number;
    expandedContent: number;
    trailer: number;
  }
}

// Module Augmentation: Extend the variants used in Button
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    nav: true;
  }
}

const darkBlue = {
  50: "#b4b5de",
  500: "#37476c",
  900: "#1e1e30",
};

const darkGrey = {
  50: "#e3e3e3",
  100: "#e7e7e7",
  600: "#434343",
  800: "#131313",
};

const foundation = "#f5f5f5";
const accent = "#6495ED"; //cornflowerblue;
const icon = grey[400];

export const theme = createTheme({
  palette: {
    primary: {
      main: darkGrey[600],
    },
    secondary: {
      main: darkGrey[50],
    },
    tertiary: {
      main: accent,
    },
    darkBlue,
    darkGrey,
    grey,
    accent,
    icon,
    foundation,
  },

  zIndex: {
    actionBar: 100,
    stickyBar: 150,
    movieHover: 200,
    titleBar: 300,
    expandedBackdrop: 400,
    expandedContent: 450,
    trailer: 500,
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "nav" },
          style: {
            color: darkGrey[50],
            textTransform: "initial",
            fontSize: "1rem",
            fontWeight: 400,
            "&:hover": {
              backgroundColor: "rgba(180,181,222,0.1)",
            },
          },
        },
      ],
    },
  },
});
