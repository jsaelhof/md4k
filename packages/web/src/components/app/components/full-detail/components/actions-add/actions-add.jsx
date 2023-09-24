import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { DetailButton } from "../actions/actions.styles";
import { useI18n } from "../../../../../../hooks/use-i18n";
import fullDetailStrings from "../../i18n/i18n";

export const ActionsAdd = ({ onAddMovie }) => {
  const { t } = useI18n(fullDetailStrings);

  return (
    <DetailButton
      color="primary"
      variant="contained"
      startIcon={<LibraryAdd />}
      onClick={onAddMovie}
    >
      {t("full_detail:actions.add_movie")}
    </DetailButton>
  );
};
