import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import {useI18n} from "../../../../hooks/use-i18n.js";
import deleteDialogStrings from "./i18n/i18n";

const DeleteDialog = ({ open, content, onCancel, onConfirm }) => {
  const {t} = useI18n(deleteDialogStrings);

  return <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
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
}

export default DeleteDialog;
