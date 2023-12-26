import { styled } from "@mui/material";

interface ButtonContainerProps {
  $critical: boolean;
}

export const ButtonContainer = styled("div")<ButtonContainerProps>(
  ({ $critical, theme: { palette } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: 24,
    height: 24,
    pointerEvents: "auto",
    cursor: "pointer",
    color: palette.icon,

    "& :hover": {
      color: $critical ? palette.warning.dark : palette.accent,
    },
  })
);
