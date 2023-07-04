import { styled } from "@mui/material";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gap: spacing(2),
  marginTop: spacing(4),
  padding: `0 ${spacing(2)}`,
}));

export const Quote = styled("div")(({ theme: { palette, spacing } }) => ({
  fontFamily: "serif",
  fontSize: "1.25rem",
  fontStyle: "italic",
  color: palette.grey[800],
  textAlign: "left",
  minWidth: 250,
  marginRight: spacing(4),
}));

export const Attribution = styled("div")(({ theme: { palette } }) => ({
  fontSize: "0.8rem",
  color: palette.grey[500],
  textAlign: "right",
}));
