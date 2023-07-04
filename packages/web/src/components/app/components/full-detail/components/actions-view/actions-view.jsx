import { Button } from "@mui/material";
import TelevisionPlay from "mdi-material-ui/TelevisionPlay";
import TelevisionOff from "mdi-material-ui/TelevisionOff";
import { Actions } from "./actions-view.styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Search from "@mui/icons-material/Search";
import { sources } from "md4k-constants";
import { searchStreaming, searchTorrent } from "../../../../../../utils/search";

export const ActionsView = ({ hasTrailer, onPlayTrailer, title, source }) => {
  const canStream = ![sources.DVD, sources.NONE].includes(source);

  return (
    <Actions>
      {/* Trailer button is duplicated in actions-add. Probably need to refactor this whole buttons thing. */}
      {hasTrailer ? (
        <Button
          color="primary"
          startIcon={<TelevisionPlay />}
          onClick={onPlayTrailer}
        >
          Watch Trailer
        </Button>
      ) : (
        <Button
          color="primary"
          startIcon={<TelevisionOff />}
          onClick={onPlayTrailer}
          disabled={true}
        >
          No Trailer
        </Button>
      )}

      {canStream && (
        <Button
          color="primary"
          startIcon={<PlayArrow />}
          onClick={() => {
            window.open(searchStreaming(title, source), "movieView");
          }}
        >
          Stream Movie
        </Button>
      )}

      {source === sources.NONE && (
        <Button
          color="primary"
          startIcon={<Search />}
          onClick={() => {
            window.open(searchTorrent(title), "movieView");
          }}
        >
          Torrent Search
        </Button>
      )}
    </Actions>
  );
};
