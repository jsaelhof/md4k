import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { DetailButton } from "../actions/actions.styles";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type ActionsAddProps = {
  onAddMovie: () => void;
};

export const ActionsAdd = ({ onAddMovie }: ActionsAddProps): ReactElement => {
  const { t } = useTranslation(["full_detail"]);

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
