import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { type ReactElement, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type ErrorDialogProps = {
  open: boolean;
  content?: ReactNode;
  debug?: string;
  onConfirm: () => void;
};

const ErrorDialog = ({
  open,
  content,
  debug,
  onConfirm,
}: ErrorDialogProps): ReactElement => {
  const { t } = useTranslation(["error_dialog"]);

  if (debug) console.error(debug);

  return (
    <Dialog open={open} onClose={onConfirm} maxWidth="xs" fullWidth>
      <DialogTitle>{t("error_dialog:title")}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content ?? t("error_dialog:default_error")}
        </DialogContentText>
        <DialogActions>
          <Button onClick={onConfirm} color="primary" variant="contained">
            {t("error_dialog:action")}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorDialog;
