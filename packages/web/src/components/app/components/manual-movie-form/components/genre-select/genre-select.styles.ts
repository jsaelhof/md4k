import { Select as MUISelect, styled } from "@mui/material";

export const Select = styled(MUISelect<number>)(() => ({
  "& div": {
    padding: "6px 8px",
  },
}));
