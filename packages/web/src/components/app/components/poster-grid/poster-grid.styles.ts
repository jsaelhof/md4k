import { styled } from "@mui/material";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 160px)",
  justifyContent: "space-between",
  columnGap: spacing(2),
  rowGap: spacing(3),

  "@media (max-width: 600px)": {
    justifyContent: "space-around",
  },
}));
