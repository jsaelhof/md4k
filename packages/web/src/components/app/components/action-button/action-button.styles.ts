import { styled } from "@mui/material";

interface ButtonContainerProps {
  $critical: boolean;
  $size: "sm" | "md" | "lg";
}

export const ButtonContainer = styled("div")<ButtonContainerProps>(
  ({ $critical, $size, theme: { palette } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: 24,
    height: 24,
    pointerEvents: "auto",
    cursor: "pointer",
    color: palette.icon,
    ...($size === "sm" && { fontSize: 20 }),
    ...($size === "md" && { fontSize: 24 }),
    ...($size === "lg" && { fontSize: 28 }),

    "& :hover": {
      color: $critical ? palette.warning.dark : palette.accent,
    },
  })
);
