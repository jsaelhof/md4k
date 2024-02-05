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

export const Poster = styled("div")<{
  $poster?: false | null | string;
  $active: boolean;
}>(({ $poster, $active }) => ({
  gridArea: "poster",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  borderRadius: 4,

  ...($poster && { backgroundImage: `url(${$poster})` }),

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

export const NoPoster = styled(Poster)<{
  $disableZoom: boolean;
  $shadow: boolean;
}>(({ $disableZoom, $shadow, theme: { palette } }) => ({
  gridArea: "poster",
  display: "grid",
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  color: palette.grey[800],
  fontSize: "0.9rem",
  background: "#f7f7fc",
  boxSizing: "border-box",
  border: "1px solid rgba(0,0,0,10%)",
  padding: 12,

  ...($disableZoom && {
    gridTemplateRows: "1fr 100px 32px",
    fontSize: "1.2rem",
  }),

  ...($shadow && {
    boxShadow: "rgb(0 0 0 / 40%) 0px 2px 6px",
  }),
}));
