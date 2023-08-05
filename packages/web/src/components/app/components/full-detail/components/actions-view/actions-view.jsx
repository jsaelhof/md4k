import { DetailButton } from "../actions/actions.styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Search from "@mui/icons-material/Search";
import { sources } from "md4k-constants";
import { searchStreaming, searchTorrent } from "../../../../../../utils/search";

export const ActionsView = ({ title, source }) => {
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
          Stream Movie
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
          Torrent Search
        </DetailButton>
      )}
    </>
  );
};
