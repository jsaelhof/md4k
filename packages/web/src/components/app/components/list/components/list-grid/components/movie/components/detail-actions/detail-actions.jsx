import DeleteIcon from "mdi-material-ui/MovieRemove";
import EditIcon from "@mui/icons-material/Edit";
import EyeCheckIcon from "mdi-material-ui/EyeCheck";
import LockIcon from "@mui/icons-material/Lock";
import UnlockIcon from "mdi-material-ui/LockOpenVariant";

import { Actions } from "./detail-actions.styles";
import ActionButton from "../../../../../../../action-button/action-button";
import { useI18n } from "../../../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../../../i18n/i18n";

const DetailActions = ({
  movie,
  onEdit,
  onMarkWatched,
  onToggleLock,
  onDelete,
}) => {
  const { t } = useI18n(listGridStrings);

  return (
    <Actions>
      <ActionButton Icon={EditIcon} tooltip="Edit" onClick={onEdit} />
      <ActionButton
        Icon={EyeCheckIcon}
        tooltip={t("list_grid:detail_actions:mark_watched")}
        onClick={onMarkWatched}
      />
      {movie.locked ? (
        <ActionButton
          Icon={UnlockIcon}
          tooltip={t("list_grid:detail_actions:unlock")}
          onClick={() => onToggleLock(false)}
        />
      ) : (
        <ActionButton
          Icon={LockIcon}
          tooltip={t("list_grid:detail_actions:lock")}
          onClick={() => onToggleLock(true)}
        />
      )}
      <ActionButton
        Icon={DeleteIcon}
        tooltip={t("list_grid:detail_actions:delete")}
        onClick={onDelete}
      />
    </Actions>
  );
};

export default DetailActions;
