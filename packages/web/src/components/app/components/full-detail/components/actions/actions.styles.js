import { Button, styled } from "@mui/material";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  gridArea: "actions",
  display: "grid",
  gridAutoFlow: "column",
  columnGap: spacing(4),
  justifyContent: "flex-end",

  "@media (max-width: 750px)": {
    justifyContent: "center",
  },
}));

export const DetailButton = styled(Button)(() => ({
  fontSize: "0.75rem",

  "@media (max-width: 450px)": {
    button: {
      display: "grid",
    },
  },
}));
