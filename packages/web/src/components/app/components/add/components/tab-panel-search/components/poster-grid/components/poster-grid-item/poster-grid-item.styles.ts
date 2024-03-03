import { styled } from "@mui/material";
import { animated } from "react-spring";

export const Layout = styled(animated.div)(
  ({ theme: { spacing, palette } }) => ({
    display: "grid",
    gridTemplateRows: "repeat(3, min-content)",
    justifyItems: "center",
    paddingTop: spacing(0.5),
    color: palette.grey[900],

    "&:hover > div:first-child": {
      transform: `translateY(${spacing(-0.5)})`,
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
    },
  })
);

export const Title = styled("div")`
  margin-top: 8px;
  text-align: center;
`;

export const Info = styled("div")(({ theme: { palette } }) => ({
  color: palette.grey[600],
  fontSize: "0.8em",
}));
