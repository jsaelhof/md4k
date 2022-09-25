import { styled } from "@mui/material";

export const AppLayout = styled("div")`
  display: grid;
  grid-template-columns: minmax(0, auto);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background: radial-gradient(#fff, #dfdfdf 80%);
`;

export const OutletLayout = styled("div")`
  margin-top: 64px;
`
