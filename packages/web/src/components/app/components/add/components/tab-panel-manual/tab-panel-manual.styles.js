import { styled } from "@mui/material";
import ListSelect from "./components/list-select/list-select";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  maxWidth: 600,
  margin: `${spacing(3)} auto 0`,
  display: "grid",
  rowGap: spacing(3),

  "@media (max-width: 500px)": {
    rowGap: spacing(1.5),
  },
}));

export const Genre = styled(ListSelect)(() => ({
  "& > div": {
    padding: "8.5px 14px",
  },
}));

export const Source = styled(ListSelect)(() => ({
  "& > div": {
    padding: "5px 14px",
  },
}));

export const Label = styled("div")(({ theme: { spacing } }) => ({
  fontSize: "0.8em",
  marginBottom: spacing(0.5),
}));

export const SmallField = styled("div")(() => ({
  width: 200,
}));

export const Actions = styled("div")(({ theme: { spacing } }) => ({
  width: 200,
  marginTop: spacing(4),
  justifySelf: "center",

  "@media (max-width: 500px)": {
    marginTop: spacing(2),
  },
}));
