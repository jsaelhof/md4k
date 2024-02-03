import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { type ReactElement, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type DeleteDialogProps = {
  open: boolean;
  content: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteDialog = ({
  open,
  content,
  onCancel,
  onConfirm,
}: DeleteDialogProps): ReactElement => {
  const { t } = useTranslation(["delete_dialog"]);

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
