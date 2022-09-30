import { styled } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export const PosterLayout = styled("div")`
  display: grid;
  grid-template-areas: "poster";
`;

export const Poster = styled("div")`
  grid-area: poster;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 4px;
  opacity: 1;
`;

export const shadowStyles = {
  boxShadow: "rgb(0 0 0 / 40%) 0px 2px 6px",
};

export const active = {
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.025)",
  },
};

export const locked = {
  opacity: 0.3,
};

export const Lock = styled(LockIcon)`
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0.4;
`;

export const NoPoster = styled(Poster)(({ theme: { palette } }) => ({
  gridArea: "poster",
  display: "grid",
  gridTemplateRows: "1fr 100px",
  justifyItems: "center",
  alignItems: "center",
  textAlign: "center",
  color: palette.grey[800],
  fontSize: "0.9rem",
  background: "#f7f7fc",
  boxSizing: "border-box",
  border: "1px solid rgba(0,0,0,10%)",
  padding: 12,
}));

export const noPosterZoom = {
  gridTemplateRows: "1fr 100px 32px",
  fontSize: "1.2rem",
};
