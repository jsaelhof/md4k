import { styled } from "@mui/material";

export const StarRatingContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  align-items: end;
`;

interface StarProps {
  $height: number;
  $marginBottom: number;
}

export const Star = styled("div")<StarProps>(({ $height, $marginBottom }) => ({
  fontSize: 0,
  width: "100%",
  height: $height,
  marginBottom: $marginBottom,

  "> img": {
    width: "100%",
    height: "100%",
  },
}));
