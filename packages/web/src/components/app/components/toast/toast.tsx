import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../../../context/app-context";
import { ReactElement, useCallback } from "react";
import { useI18n } from "../../../../hooks/use-i18n";
import toastStrings from "./i18n/i18n";

const Toast = (): ReactElement => {
  const { t } = useI18n(toastStrings);
  const { toast, setToast } = useAppContext();

  const onClose = useCallback(() => {
    setToast(null);
  }, [setToast]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={!!toast}
      autoHideDuration={5000}
      onClose={onClose}
      message={toast?.message}
      action={
        <>
          {toast?.onUndo && (
            <Button color="secondary" size="small" onClick={toast.onUndo}>
              {t("toast:undo").toUpperCase()}
            </Button>
          )}
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  );
};

export default Toast;
