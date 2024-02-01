import { styled } from "@mui/material";

export const Layout = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 150,
  margin: "0 8px",
}));

interface HeadshotProps {
  $image: string;
  $y: number;
}

export const Headshot = styled("div")<HeadshotProps>(({ $image, $y }) => ({
  backgroundImage: `url(${$image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: `center ${$y}px`,
  borderRadius: "999px",
  border: "1px solid rgba(0,0,0,0.3)",
  width: 55,
  height: 55,
}));

export const Name = styled("div")(() => ({
  marginTop: 4,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: "100%",
  textAlign: "center",
  fontSize: "0.875rem",
}));

export const Character = styled("div")(() => ({
  opacity: 0.5,
  fontSize: "0.75rem",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  width: "100%",
  textAlign: "center",
}));
