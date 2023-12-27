import { SxProps, Theme, styled } from "@mui/material";
import { app } from "../../../../constants/app";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  maxWidth: "600px",
  margin: "0 auto",
  padding: `${spacing(3)} ${app.LIST_MARGIN}px`,

  "@media (max-width: 500px)": {
    padding: `${spacing(1)} ${app.LIST_MARGIN_MOBILE}px`,
  },
}));

export const tabStyles = ({ spacing, palette }: Theme): SxProps<Theme> => ({
  paddingLeft: 0,
  paddingRight: 0,
  minWidth: 0,
  marginRight: spacing(6),
  color: palette.grey[500],

  "&:last-of-type": {
    marginRight: 0,
  },
});

export const tabsStyles = (): SxProps<Theme> => ({
  borderBottom: "1px solid #ddd",
});

export const NotFoundLayout = styled("div")(({ theme: { spacing } }) => ({
  marginTop: spacing(3),
  textAlign: "center",
}));
