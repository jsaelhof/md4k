import { styled } from "@mui/material";

export const RatingsList = styled("ul")<{
  $dense: boolean;
  $size?: "sm" | "md";
}>(({ $dense, $size = "md" }) => ({
  display: "flex",
  listStyleType: "none",
  paddingLeft: 0,
  fontWeight: "normal",

  ...($size === "md" && { fontSize: 16 }),
  ...($size === "sm" && { fontSize: 14 }),

  ...($dense && { margin: 0 }),
}));

export const RatingsListItem = styled("li")`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const RatingsSourceIcon = styled("img")<{ $size?: "sm" | "md" }>(
  ({ $size = "md" }) => ({
    ...($size === "sm" && {
      width: 20,
      height: 20,
    }),
    ...($size === "md" && {
      width: 24,
      height: 24,
    }),
    marginRight: 8,
  })
);
