import { styled } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

interface PosterLayoutProps {
  $height: number;
  $noRel: boolean;
  $locked: boolean;
}

export const PosterLayout = styled("div")<PosterLayoutProps>(
  ({ $height, $noRel, $locked }) => ({
    display: "grid",
    gridTemplateAreas: `
    "poster"
    `,
    opacity: 1,
    width: $height * 0.64,
    height: $height,

    ...(!$noRel && { position: "relative" }),
    ...($locked && {
      opacity: 0.3,
    }),
  })
);

export const Poster = styled("img")<{
  $active: boolean;
}>(({ $active }) => ({
  gridArea: "poster",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: 4,

  ...($active && {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.025)",
    },
  }),
}));

export const Lock = styled(LockIcon)`
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0.4;
`;

export const NoPoster = styled("div")<{
  $active: boolean;
  $shadow: boolean;
  $height: number;
}>(({ $active, $shadow, $height, theme: { palette } }) => ({
  gridArea: "poster",
  borderRadius: 4,
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  color: palette.grey[800],
  fontSize: `calc(0.9rem * (${$height} / 250))`,
  background: "#f7f7fc",
  boxSizing: "border-box",
  border: "1px solid rgba(0,0,0,10%)",
  padding: 12,

  ...($active && {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.025)",
    },
  }),

  ...($shadow && {
    boxShadow: "rgb(0 0 0 / 40%) 0px 2px 6px",
  }),
}));
