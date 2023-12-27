import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { ReactElement } from "react";
import { useI18n } from "../../../../hooks/use-i18n";
import deleteDialogStrings from "./i18n/i18n";

export type DeleteDialogProps = {
  open: boolean;
  content: ReactElement;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteDialog = ({
  open,
  content,
  onCancel,
  onConfirm,
}: DeleteDialogProps): ReactElement => {
  const { t } = useI18n(deleteDialogStrings);

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{t("delete_dialog:title")}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        <DialogActions>
          <Button onClick={onCancel} autoFocus>
            {t("delete_dialog:action_cancel")}
          </Button>
          <Button onClick={onConfirm} variant="contained" color="error">
            {t("delete_dialog:action_delete")}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
