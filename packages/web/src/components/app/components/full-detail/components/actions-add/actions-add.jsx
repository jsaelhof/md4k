import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { DetailButton } from "../actions/actions.styles";

export const ActionsAdd = ({ onAddMovie }) => (
  <DetailButton
    color="primary"
    variant="contained"
    startIcon={<LibraryAdd />}
    onClick={onAddMovie}
  >
    Add Movie
  </DetailButton>
);
