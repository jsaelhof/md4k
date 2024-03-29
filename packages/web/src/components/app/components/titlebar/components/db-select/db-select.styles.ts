import { MenuItem, Select as MuiSelect, styled } from "@mui/material";

export const Select = styled(MuiSelect<string>)(({ theme: { palette } }) => ({
  color: palette.secondary.main,

  "& .MuiSelect-select": {
    paddingRight: "0 !important",
  },

  "& .MuiButton-root": {
    paddingRight: "38px !important",
  },

  "& .MuiSelect-icon": {
    color: palette.secondary.main,
    right: 6,
  },
}));

export const NewListMenuItem = styled(MenuItem)(() => ({
  fontStyle: "italic",
}));
