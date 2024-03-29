import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  boxShadow: "inset 0 0 20px rgba(0,0,0,25%)",
  backgroundImage: "linear-gradient(to top, #eee, #bbb)",
  height: "fit-content",
}));

export const BackdropWrapper = styled("div")(() => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  inset: 0,
  maskImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 40%, rgba(0,0,0,0.1) 100%)",
}));

interface BackdropProps {
  $imageUrl?: string | null;
}

export const Backdrop = styled("div")<BackdropProps>(({ $imageUrl }) => ({
  backgroundImage: `url(${$imageUrl})`,
  backgroundPosition: "center 20%",
  backgroundSize: "cover",
  height: "100%",
}));

interface ContentProps {
  $right: boolean;
}

export const Content = styled("div")<ContentProps>(
  ({ $right, theme: { spacing } }) => ({
    position: "relative",
    width: "100%",
    maxWidth: `calc(1000px - ${spacing(6)})`,
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "end",
    justifyContent: $right ? "end" : "start",
    padding: spacing(3),
    columnGap: spacing(3),
    transition: "padding 400ms",

    "@media (min-width: 1000px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  })
);

export const PosterLayout = styled("div")(() => ({
  boxShadow:
    "3px 10px 10px rgba(0, 0, 0, 0.1), 0px 5px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 20px 0px rgba(0, 0, 0, 0.12)",
}));

interface InfoLayoutProps {
  $right: boolean;
}

export const InfoLayout = styled("div")<InfoLayoutProps>(
  ({ theme, $right }) => ({
    color: theme.palette.grey[900],
    textShadow: "0 0 3px white",
    textAlign: $right ? "right" : "left",
  })
);

export const InfoTitle = styled("div")(() => ({
  fontSize: "2rem",
  fontWeight: "bold",

  "@media (max-width: 550px)": {
    fontSize: "1.25rem",
  },
}));

export const InfoDate = styled("div")(() => ({
  position: "relative",
  fontSize: "1.25rem",
  cursor: "pointer",

  "@media (max-width: 430px)": {
    fontSize: "1.125rem",
  },
}));
