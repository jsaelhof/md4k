import { type Theme, styled } from "@mui/material";
import { DayPicker } from "react-day-picker";
import { animated } from "react-spring";

interface PickerProps {
  $useDrawer: boolean;
  $align: "left" | "right";
}

export const Picker = styled(animated.div)<PickerProps>(
  ({ $useDrawer, $align, theme: { palette } }) => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: `${palette.darkGrey[800]}EE`,
    color: palette.grey[400],
    border: "1px solid rgba(0, 0, 0, 0.25)",
    top: 0,
    bottom: 0,

    ...($useDrawer && {
      position: "initial",
      textAlign: "center",
      paddingBottom: "1em",
    }),

    ...($align === "left" && { right: 0, left: "unset" }),
    ...($align === "right" && { right: "unset", left: 0 }),

    "@media (max-width:550px)": {
      margin: "0 auto",
      background: "transparent",
      border: "none",
    },
  })
);

export const StyledDayPicker = styled(DayPicker)(
  ({ $drawer }: { $drawer: boolean }) => ({
    padding: "8px",

    ".rdp-month_caption": {
      paddingLeft: "15px",
      fontWeight: "normal",
      fontSize: "1em",

      ...(!$drawer && {
        paddingLeft: "8px",
      }),
    },

    ".rdp-chevron": {
      fill: "#bdbdbd",
    },

    ".rdp-selected > .rdp-day_button": {
      background: "var(--rdp-accent-color)",
      color: "white",
    },

    ...(!$drawer && {
      marginBottom: 0,
      fontSize: "0.9rem",
    }),
  })
);

// Using this as a method to set the css variables for day picker. All actual styling is done in the styled component.
export const dayPickerStyles = ({ drawer }: { drawer: boolean }) => ({
  "--rdp-accent-color": "#6494ed99",
  "--rdp-outline": "2px solid var(--rdp-accent-color)",
  "--rdp-selected-font": "1em",
  "--rdp-weekday-padding": 0,

  ...(!drawer && {
    "--rdp-day-height": "32px",
    "--rdp-day-width": "32px",
  }),
});

export const DrawerPaper = ({ palette }: Theme) =>
  ({
    background: `${palette.darkGrey[800]}EE`,
  }) as const;

export const ButtonGroup = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto auto",
  columnGap: spacing(2),
  margin: "0 1em 1em",

  "@media (max-width:550px)": {
    margin: "1em 1em 0",
    columnGap: spacing(4),
  },
}));

export const Title = styled("div")(({ theme: { palette, spacing } }) => ({
  fontSize: 18,
  textAlign: "center",
  color: palette.grey[400],
  padding: `${spacing(2)} ${spacing(2)}`,
}));
