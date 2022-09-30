import { styled } from "@mui/material";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  justifyItems: "center",
  paddingTop: spacing(0.5),

  "& :hover > div": {
    transform: `translateY(${spacing(-0.5)})`,
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.25)",
  },
}));

export const Title = styled("div")`
  margin-top: 8px;
  text-align: center;
`;

export const Year = styled("div")`
  font-size: 0.8em;
`;
