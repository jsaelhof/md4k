import { styled } from "@mui/material";
import { app } from "../../../../../../../../constants/app";

export const SectionLayout = styled("div")(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: spacing(2),
  marginTop: spacing(4),
  marginBottom: spacing(7),
  padding: `0 ${app.LIST_MARGIN}px`,

  "@media (max-width: 500px)": {
    padding: `0 ${spacing(2)}`,
  },
}));

export const MovieSectionTitle = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 6,

  "& :nth-of-type(2)": {
    color: palette.grey[500],
    fontSize: 12,
  },
}));

export const MovieList = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 160px)",
  gap: spacing(2),
  justifyContent: "center",
}));
