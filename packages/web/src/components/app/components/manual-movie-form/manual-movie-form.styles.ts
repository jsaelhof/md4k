import { InputLabel, styled } from "@mui/material";

export const MovieForm = styled("form")(({ theme: { spacing } }) => ({
  maxWidth: 600,
  margin: `${spacing(3)} auto 0`,
  display: "grid",
  rowGap: spacing(3),

  "@media (max-width: 500px)": {
    rowGap: spacing(1.5),
  },
}));

export const Label = styled(InputLabel)(({ theme: { spacing } }) => ({
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

export const Preview = styled("div")<{ $poster?: string | null }>(
  ({ $poster }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    border: "1px solid lightgrey",
    borderRadius: 8,
    backgroundImage: `url(${$poster})`,
  })
);

export const BackgroundPreview = styled(Preview)<{
  $background?: string | null;
}>(({ $background }) => ({
  backgroundImage: `url(${$background})`,
  backgroundSize: "cover",
}));

export const PreviewLayout = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 160px",
  gap: spacing(3),

  "@media (max-width: 414px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 150px",
  },
}));
