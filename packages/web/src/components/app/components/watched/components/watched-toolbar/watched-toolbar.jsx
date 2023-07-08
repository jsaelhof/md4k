import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import { Layout, Status } from "./watched-toolbar.styles";

const WatchedToolbar = ({ count, visibleCount, searchTerm, onSearch }) => {
  const small = useMediaQuery("(max-width: 550px)");

  return (
    <Layout>
      <Status>
        {visibleCount < count ? (
          <div>
            {small
              ? `${visibleCount} of ${count} movies`
              : `Showing ${visibleCount} of ${count} movies watched`}
          </div>
        ) : (
          <div>{small ? `${count} movies` : `${count} movies watched`}</div>
        )}
      </Status>

      <TextField
        value={searchTerm}
        placeholder="Search"
        inputProps={{
          "aria-label": "Search",
        }}
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
    </Layout>
  );
};

export default WatchedToolbar;
