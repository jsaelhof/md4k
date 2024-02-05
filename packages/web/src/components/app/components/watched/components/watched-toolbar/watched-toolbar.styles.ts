import { FormGroup, IconButton, styled } from "@mui/material";
import { app } from "../../../../../../constants/app";

export const Layout = styled(FormGroup)(
  ({ theme: { spacing, zIndex, palette } }) => ({
    display: "grid",
    gridTemplateColumns: "auto minmax(200px, 600px)",
    columnGap: spacing(4),
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${spacing(1)} ${spacing(3)}`,
    position: "sticky",
    top: app.TITLE_BAR_HEIGHT,
    zIndex: zIndex.stickyBar,
    background: palette.foundation,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  })
);

export const Status = styled("div")(({ theme: { palette } }) => ({
  whiteSpace: "nowrap",
  color: palette.grey[700],
}));

export const CloseIconButton = styled(IconButton)<{ $visible: boolean }>(
  ({ $visible }) => ({
    marginRight: "-8px",
    visibility: $visible ? "visible" : "hidden",
  })
);
