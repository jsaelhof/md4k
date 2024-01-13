import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Search from "@mui/icons-material/Search";
import { Layout, Status } from "./watched-toolbar.styles";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type WatchedToolbarProps = {
  count: number;
  visibleCount: number;
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
};

const WatchedToolbar = ({
  count,
  visibleCount,
  searchTerm,
  onSearch,
}: WatchedToolbarProps): ReactElement => {
  const { t } = useTranslation(["watched"]);
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
                onClick={(): void => onSearch("")}
              >
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        onChange={({ target }): void => onSearch(target.value)}
      />
    </Layout>
  );
};

export default WatchedToolbar;
