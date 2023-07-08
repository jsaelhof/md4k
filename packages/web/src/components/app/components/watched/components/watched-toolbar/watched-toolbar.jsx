import {
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import { Layout } from "./watched-toolbar.styles";
import FormatListText from "mdi-material-ui/FormatListText";
import ViewModule from "@mui/icons-material/ViewModule";

const WatchedToolbar = ({
  compactView,
  onSetCompactView,
  searchTerm,
  onSearch,
}) => (
  <Layout>
    <TextField
      value={searchTerm}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              sx={{
                mr: "-8px",
                visibility: searchTerm.length ? "visible" : "hidden",
              }}
              onClick={() => onSearch("")}
            >
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
      size="small"
      onChange={({ target }) => onSearch(target.value)}
    />

    <ToggleButtonGroup
      value={compactView ? "compact" : "full"}
      exclusive
      onChange={(event, value) => onSetCompactView(value === "compact")}
      aria-label="List View"
      color="tertiary"
    >
      <ToggleButton value="full" aria-label="full" size="small">
        <FormatListText />
      </ToggleButton>
      <ToggleButton value="compact" aria-label="compact" size="small">
        <ViewModule />
      </ToggleButton>
    </ToggleButtonGroup>
  </Layout>
);

export default WatchedToolbar;
