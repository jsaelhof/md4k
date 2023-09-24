import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useI18n } from "../../../../hooks/use-i18n.js";
import errorDialogStrings from "./i18n/i18n";

const ErrorDialog = ({ open, content, debug, onConfirm }) => {
  const { t } = useI18n(errorDialogStrings);

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
