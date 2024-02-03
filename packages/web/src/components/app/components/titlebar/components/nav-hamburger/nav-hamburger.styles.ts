import { styled, Divider, type Theme } from "@mui/material";
import Refresh from "@mui/icons-material/Refresh";
import Eye from "mdi-material-ui/Eye";
import Movie from "mdi-material-ui/Movie";
import List from "@mui/icons-material/FormatListBulleted";
import Add from "@mui/icons-material/Add";

export const NavMenu = styled("div")(({ theme: { spacing } }) => ({
  gridArea: "nav",
  marginRight: spacing(2),
}));

const icon = ({ theme: { palette, spacing } }: { theme: Theme }) =>
  ({
    marginRight: spacing(2),
    color: palette.grey[600],
  } as const);

export const RefreshIcon = styled(Refresh)(icon);
export const ListIcon = styled(List)(icon);
export const EyeIcon = styled(Eye)(icon);
export const MovieIcon = styled(Movie)(icon);
export const AddListIcon = styled(Add)(icon);

export const MenuDivider = styled(Divider)(({ theme: { spacing } }) => ({
  marginTop: spacing(0.5),
  marginBottom: spacing(0.5),
}));
