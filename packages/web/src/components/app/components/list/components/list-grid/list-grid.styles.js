import { styled } from "@mui/material";
import { app } from "../../../../../../constants/app";

export const MovieList = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 160px)",
  gap: spacing(2),
  marginTop: spacing(3),
  marginBottom: 200,
  justifyContent: "center",
  padding: `0 ${app.LIST_MARGIN}px`,

  "@media (max-width: 500px)": {
    padding: "0 16px",
  },
}));
