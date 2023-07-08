import { FormGroup, styled } from "@mui/material";
import { app } from "../../../../../../constants/app";

export const Layout = styled(FormGroup)(
  ({ theme: { spacing, zIndex, palette } }) => ({
    display: "grid",
    gridTemplateColumns: "minmax(200px, 600px) auto",
    columnGap: spacing(4),
    justifyContent: "space-between",
    padding: `${spacing(1)} ${spacing(3)}`,
    position: "sticky",
    top: app.TITLE_BAR_HEIGHT,
    zIndex: zIndex.stickyBar,
    background: palette.foundation,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  })
);
