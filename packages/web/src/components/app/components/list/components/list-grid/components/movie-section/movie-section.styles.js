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

export const MovieSectionTitle = styled("div")(
  ({ theme: { palette, spacing } }) => ({
    display: "flex",
    flexDirection: "column",
    rowGap: 6,

    "& :nth-of-type(2)": {
      color: palette.grey[500],
      fontSize: 12,
    },

    "@media (max-width: 720px)": {
      alignItems: "center",
      marginLeft: "0 !important",
      paddingBottom: spacing(2),
      borderBottom: "1px solid",
      borderImage:
        "linear-gradient(to right, rgba(0,0,0,0) 20%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%) 1",
    },
  })
);

export const MovieList = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 160px)",
  gap: spacing(2),
  justifyContent: "center",
}));
