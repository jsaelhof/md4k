import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

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
