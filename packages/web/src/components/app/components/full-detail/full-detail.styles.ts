import { styled } from "@mui/material";
import { animated } from "react-spring";

export const FullDetailLayout = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

interface CloseButtonProps {
  $useColorBlend?: boolean;
}

export const CloseButton = styled("div")<CloseButtonProps>(
  ({ $useColorBlend }) => ({
    position: "absolute",
    top: "8px",
    right: "8px",
    zIndex: 100,
    cursor: "pointer",
    color: "black",

    ...($useColorBlend && {
      color: "white",
      mixBlendMode: "exclusion",
    }),
  })
);

const ChangeBackgroundButton = styled("div")`
  grid-area: main;
  color: rgba(255, 255, 255, 1);
  width: 10%;
  display: flex;
  align-items: center;
  padding: 8px;
  opacity: 0;
  transition: opacity 400ms;

  &:hover {
    opacity: 1;
  }

  & svg {
    font-size: 3rem;
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.75));
  }
`;

export const NextBackgroundButton = styled(ChangeBackgroundButton)`
  justify-self: end;
  justify-content: end;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), transparent);
`;

export const PrevBackgroundButton = styled(ChangeBackgroundButton)`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent);
`;

export const BackdropWrapper = styled("div")`
  display: grid;
  grid-template-areas: "main";
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 50%,
    transparent 100%
  );
  height: 60vh;
  width: 100%;

  @media (min-width: 2000px) {
    height: 63vh;
  }

  @media (max-width: 750px) {
    height: 50vh;
  }
`;

export const Backdrop = styled(animated.div)<{ $backdrop?: string | null }>(
  ({ $backdrop }) => ({
    gridArea: "main",
    backgroundSize: "cover",
    backgroundPositionX: "center",
    height: "100%",
    width: "100%",
    backgroundImage: $backdrop
      ? `url("${$backdrop}")`
      : "linear-gradient(to top, #eee, #bbb)",
  })
);

export const TrailerLayout = styled("div")`
  grid-area: main;
`;

export const MovieInfo = styled("div")`
  margin: -160px 32px 32px 32px;
  display: grid;
  grid-template-areas:
    "poster title title"
    "poster info source"
    "poster plot plot"
    "poster actions actions";
  grid-template-rows: 130px 40px 197px 33px;
  grid-template-columns: max-content 1fr max-content;
  width: calc(
    100% - 64px
  ); // Width is 100% minus left/right margins. This keeps the grid open fully if the content is narrow and helps with the skeletons. It won't get wider than max-width though.
  max-width: 960px;
  min-height: 400px;
  z-index: 10;
  margin-top: -200px;

  @media (max-width: 750px) {
    margin-top: -150px;
    grid-template-areas:
      "poster poster"
      "title title"
      "info source"
      "plot plot"
      "actions actions"
      "people people";
    grid-template-rows: 300px auto 40px max-content auto auto;
    grid-template-columns: 1fr;
    min-height: 300px;
  }
`;

export const Poster = styled(animated.div)`
  grid-area: poster;
  margin-right: 32px;
  height: fit-content;
  box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.1),
    0px 5px 15px 0px rgba(0, 0, 0, 0.1), 0px 1px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 750px) {
    margin-right: 0;
    justify-self: center;
  }
`;

export const MovieTitle = styled("div")<{ $size?: "sm" | "lg" }>(
  ({ $size, theme: { palette, spacing } }) => ({
    gridArea: "title",
    fontSize: 48,
    ...($size === "sm" && { fontSize: 32 }),
    fontWeight: "bold",
    color: palette.grey[900],
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    textShadow: "0 0 3px white",
    marginBottom: 8,

    "@media (max-width: 750px)": {
      fontSize: 32,
      alignItems: "center",
      textAlign: "center",
      paddingTop: spacing(3),
      marginBottom: spacing(2),
    },
  })
);

export const RatingsArea = styled("div")`
  grid-area: ratings;
`;

export const MovieData = styled("div")(({ theme: { palette, spacing } }) => ({
  padding: 0,
  display: "grid",
  columnGap: spacing(3),
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(3, max-content) 1fr",
  fontSize: 14,
  alignItems: "center",
  gridArea: "info",
  color: palette.grey[900],
  marginRight: spacing(1),

  "@media (max-width: 750px)": {
    columnGap: spacing(2),
  },
}));

interface SourceLogoProps {
  $streamable?: boolean;
}

export const SourceLogo = styled("img")<SourceLogoProps>(({ $streamable }) => ({
  gridArea: "source",
  height: "40px",
  marginLeft: "auto",

  ...($streamable && {
    cursor: "pointer",
    "&:hover": { transform: "scale(1.1)" },
  }),
}));

export const PlotLayout = styled("div")(({ theme: { spacing } }) => ({
  gridArea: "plot",
  marginTop: spacing(2),
  marginBottom: spacing(3),
}));

export const CastLayout = styled("div")(({ theme: { spacing } }) => ({
  gridArea: "people",
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  justifyContent: "space-between",
  margin: `${spacing(2)} ${spacing(4)}`,

  "@media (max-width: 700px)": {
    rowGap: spacing(3),
    gridTemplateColumns: "repeat(2, auto)",
    margin: spacing(4),
  },
}));
