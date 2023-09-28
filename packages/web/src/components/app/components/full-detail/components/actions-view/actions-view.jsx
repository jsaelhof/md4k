import { DetailButton } from "../actions/actions.styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Search from "@mui/icons-material/Search";
import { sources } from "md4k-constants";
import { searchStreaming, searchTorrent } from "../../../../../../utils/search";
import { useI18n } from "../../../../../../hooks/use-i18n";
import fullDetailStrings from "../../i18n/i18n";

export const ActionsView = ({ title, source }) => {
  const { t } = useI18n(fullDetailStrings);
  const canStream = ![sources.DVD, sources.NONE].includes(source);

  return (
    <>
      {canStream && (
        <DetailButton
          color="primary"
          startIcon={<PlayArrow />}
          onClick={() => {
            window.open(searchStreaming(title, source), "movieView");
          }}
        >
          {t("full_detail:actions.stream_movie")}
        </DetailButton>
      )}

      {source === sources.NONE && (
        <DetailButton
          color="primary"
          startIcon={<Search />}
          onClick={() => {
            window.open(searchTorrent(title), "movieView");
          }}
        >
          {t("full_detail:actions.torrent_search")}
        </DetailButton>
      )}
    </>
  );
};
