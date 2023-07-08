import { styled } from "@mui/material";

export const StackedContainer = styled("div")(() => ({
  display: "grid",
  gridAutoFlow: "row",
  gridTemplateRows: "max-content",
  gridTemplateColumns: "1fr",
}));

export const NoMoviesFound = styled("div")(
  ({ theme: { palette, spacing } }) => ({
    color: palette.grey[700],
    textAlign: "center",
    lineHeight: "1.75em",
    marginTop: spacing(5),

    "& svg": {
      fontSize: "2.5em",
    },
  })
);
