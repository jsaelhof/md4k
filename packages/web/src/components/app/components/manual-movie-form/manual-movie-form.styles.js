import { styled } from "@mui/material";
import ListSelect from "./components/list-select/list-select";

export const MovieForm = styled("form")(({ theme: { spacing } }) => ({
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
  display: "grid",
  gridAutoFlow: "column",
  gap: spacing(2),
  marginTop: spacing(4),
  justifySelf: "center",

  "@media (max-width: 500px)": {
    marginTop: spacing(2),
  },

  "> button": {
    minWidth: 150,
  },
}));

export const Preview = styled("div")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#eee",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  border: "1px solid lightgrey",
  borderRadius: 8,
}));

export const BackgroundPreview = styled(Preview)`
  background-size: cover;
`;

export const PreviewLayout = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 160px",
  gap: spacing(3),

  "@media (max-width: 414px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 150px",
  },
}));
