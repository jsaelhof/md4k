import { DetailButton } from "../actions/actions.styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Search from "@mui/icons-material/Search";
import { Source } from "md4k-constants";
import { searchStreaming, searchTorrent } from "../../../../../../utils/search";
import { ReactElement } from "react";
import { SourceValue } from "../../../../../../types";
import { useTranslation } from "react-i18next";

export type ActionsViewProps = {
  title: string;
  source: SourceValue;
};

export const ActionsView = ({
  title,
  source,
}: ActionsViewProps): ReactElement => {
  const { t } = useTranslation(["full_detail"]);
  const canStream = !([Source.DVD, Source.NONE] as SourceValue[]).includes(
    source
  );

  return (
    <>
      {canStream && (
        <DetailButton
          color="primary"
          startIcon={<PlayArrow />}
          onClick={(): void => {
            window.open(searchStreaming(title, source), "movieView");
          }}
        >
          {t("full_detail:actions.stream_movie")}
        </DetailButton>
      )}

      {source === Source.NONE && (
        <DetailButton
          color="primary"
          startIcon={<Search />}
          onClick={(): void => {
            window.open(searchTorrent(title), "movieView");
          }}
        >
          {t("full_detail:actions.torrent_search")}
        </DetailButton>
      )}
    </>
  );
};
