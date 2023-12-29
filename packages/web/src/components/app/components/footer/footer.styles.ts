import { styled } from "@mui/material";
import { app } from "../../../../constants/app";

export const FooterLayout = styled("div")(
  ({ theme: { palette, spacing } }) => ({
    width: "100%",
    height: app.FOOTER_HEIGHT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > a": {
      fontSize: "0.9rem",
      margin: `0 ${spacing(2)}`,
      textDecoration: "none",
      color: palette.grey[600],
    },

    "& > a:hover": {
      color: palette.accent,
    },
  })
);
