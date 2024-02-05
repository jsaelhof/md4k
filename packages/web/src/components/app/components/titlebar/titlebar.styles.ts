import { styled } from "@mui/material";
import { app } from "../../../../constants/app";
import NavButton from "./components/nav-button/nav-button";
import { Box, Toolbar as MUIToolbar } from "@mui/material";

export const AppBarContainer = styled(Box)(
  ({ theme: { palette, zIndex } }) => ({
    position: "fixed",
    width: "100%",
    zIndex: zIndex.titleBar,
    background: `linear-gradient(75deg, ${palette.darkGrey[600]}, ${palette.darkGrey[800]} 80%)`,
  })
);

export const Toolbar = styled(MUIToolbar)<{ $pickScreen: boolean }>(
  ({ $pickScreen }) => ({
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateAreas: `"logo nav profile"`,
    minHeight: `${app.TITLE_BAR_HEIGHT}px`,

    "@media (max-width: 580px)": {
      gridTemplateAreas: `"nav logo profile"`,
    },

    ...($pickScreen && {
      "@media (max-width: 580px)": {
        gridTemplateAreas: `"nav logo pick profile"`,
        gridTemplateColumns: "auto max-content 1fr auto",
      },
    }),
  })
);

export const PickAgainButton = styled(NavButton)(({ theme: { spacing } }) => ({
  gridArea: "pick",
  marginRight: spacing(2),
  marginLeft: "auto",
}));
