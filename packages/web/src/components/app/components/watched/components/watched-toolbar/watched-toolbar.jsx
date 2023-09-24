import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import { Layout, Status } from "./watched-toolbar.styles";
import { useI18n } from "../../../../../../hooks/use-i18n";
import watchedStrings from "../../i18n/i18n";

const WatchedToolbar = ({ count, visibleCount, searchTerm, onSearch }) => {
  const { t } = useI18n(watchedStrings);
  const small = useMediaQuery("(max-width: 550px)");

  return (
    <Layout>
      <Status>
        {visibleCount < count ? (
          <div>
            {t(`watched:toolbar.showing_${small ? "small" : "large"}`, {
              visibleCount,
              count,
            })}
          </div>
        ) : (
          <div>
            {t(`watched:toolbar.count_${small ? "small" : "large"}`, {
              visibleCount,
              count,
            })}
          </div>
        )}
      </Status>

      <TextField
        value={searchTerm}
        placeholder={t("watched:toolbar.search_placeholder")}
        inputProps={{
          "aria-label": t("watched:toolbar.search_label"),
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
