import { Button } from "@mui/material";
import TelevisionPlay from "mdi-material-ui/TelevisionPlay";
import TelevisionOff from "mdi-material-ui/TelevisionOff";
import { Actions } from "./actions-add.styles";
import LibraryAdd from "@mui/icons-material/LibraryAdd";

export const ActionsAdd = ({ hasTrailer, onPlayTrailer, onAddMovie }) => (
  <Actions>
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

    <Button
      color="primary"
      variant="contained"
      startIcon={<LibraryAdd />}
      onClick={onAddMovie}
    >
      Add Movie
    </Button>
  </Actions>
);
