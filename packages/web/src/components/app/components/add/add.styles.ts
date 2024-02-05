import {
  type Theme,
  styled,
  Tabs as MUITabs,
  Tab as MUITab,
} from "@mui/material";
import { app } from "../../../../constants/app";

export const Layout = styled("div")(({ theme: { spacing } }) => ({
  padding: `${spacing(3)} ${app.LIST_MARGIN}px`,

  "@media (max-width: 500px)": {
    padding: `${spacing(1)} ${app.LIST_MARGIN_MOBILE}px`,
  },
}));

export const Tabs = styled(MUITabs)(() => ({
  borderBottom: "1px solid #ddd",
}));

export const Tab = styled(MUITab)(({ theme: { spacing, palette } }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  minWidth: 0,
  marginRight: spacing(6),
  color: palette.grey[500],

  "&:last-of-type": {
    marginRight: 0,
  },
}));
