import { styled } from "@mui/material";
import { app } from "../../constants/app";

export const AppLayout = styled("div")(({ theme: { palette } }) => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, auto)",
  gridTemplateRows: "auto 1fr auto",
  minHeight: "100vh",
  backgroundColor: palette.grey[100],
}));

export const OutletLayout = styled("div")`
  margin-top: ${app.TITLE_BAR_HEIGHT}px;
  min-height: calc(100vh - ${app.TITLE_BAR_HEIGHT + app.FOOTER_HEIGHT}px);
`;
