import { styled } from "@mui/material";

interface ItemProps {
  value: number;
}

export const Item = styled("div")<ItemProps>(
  ({ theme: { spacing }, value }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: spacing(1),

    ...(value === 0 && {
      fontStyle: "italic",
    }),
  })
);
