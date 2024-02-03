import DeleteIcon from "mdi-material-ui/MovieRemove";
import EditIcon from "@mui/icons-material/Edit";
import EyeCheckIcon from "mdi-material-ui/EyeCheck";
import LockIcon from "@mui/icons-material/Lock";
import UnlockIcon from "mdi-material-ui/LockOpenVariant";

import { Actions } from "./detail-actions.styles";
import ActionButton from "../../../../../../../action-button/action-button";
import { type Movie } from "../../../../../../../../../../__generated__/graphql";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type DetailActionsProps = {
  movie: Movie;
  onEdit: () => void;
  onMarkWatched: () => void;
  onToggleLock: (locked: boolean) => void;
  onDelete: () => void;
};

const DetailActions = ({
  movie,
  onEdit,
  onMarkWatched,
  onToggleLock,
  onDelete,
}: DetailActionsProps): ReactElement => {
  const { t } = useTranslation(["list_grid"]);

  return (
    <Actions>
      <ActionButton Icon={EditIcon} tooltip="Edit" onClick={onEdit} />
      <ActionButton
        Icon={EyeCheckIcon}
        tooltip={t("list_grid:detail_actions.mark_watched")}
        onClick={onMarkWatched}
      />
      {movie.locked ? (
        <ActionButton
          Icon={UnlockIcon}
          tooltip={t("list_grid:detail_actions.unlock")}
          onClick={(): void => onToggleLock(false)}
        />
      ) : (
        <ActionButton
          Icon={LockIcon}
          tooltip={t("list_grid:detail_actions.lock")}
          onClick={(): void => onToggleLock(true)}
        />
      )}
      <ActionButton
        Icon={DeleteIcon}
        tooltip={t("list_grid:detail_actions.delete")}
        onClick={onDelete}
      />
    </Actions>
  );
};

export default DetailActions;
